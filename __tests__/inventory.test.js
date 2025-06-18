import handler from '../pages/api/inventory/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/inventory', () => {
  beforeAll(async () => {
    await prisma.ingredient.createMany({
      data: [
        { 
          name: 'Inventory Coffee', 
          unit: 'g', 
          costPerUnit: 0.03, 
          currentStock: 3000, 
          wastePercentage: 0.1 
        },
        { 
          name: 'Inventory Milk', 
          unit: 'ml', 
          costPerUnit: 0.002, 
          currentStock: 5000, 
          wastePercentage: 0.05 
        },
      ],
    });
  });

  afterAll(async () => {
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('returns all ingredients as inventory on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const inventory = JSON.parse(res._getData());
    expect(inventory.length).toBeGreaterThanOrEqual(2);
    expect(inventory.some(item => item.name === 'Inventory Coffee')).toBe(true);
    expect(inventory.some(item => item.name === 'Inventory Milk')).toBe(true);
    
    // Verify structure includes all necessary fields
    const firstItem = inventory[0];
    expect(firstItem).toHaveProperty('id');
    expect(firstItem).toHaveProperty('name');
    expect(firstItem).toHaveProperty('unit');
    expect(firstItem).toHaveProperty('currentStock');
    expect(firstItem).toHaveProperty('costPerUnit');
  });

  test('handles empty inventory gracefully', async () => {
    // Clear all ingredients temporarily
    await prisma.ingredient.deleteMany();
    
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const inventory = JSON.parse(res._getData());
    expect(Array.isArray(inventory)).toBe(true);
    expect(inventory.length).toBe(0);
    
    // Restore test data
    await prisma.ingredient.createMany({
      data: [
        { 
          name: 'Inventory Coffee', 
          unit: 'g', 
          costPerUnit: 0.03, 
          currentStock: 3000, 
          wastePercentage: 0.1 
        },
        { 
          name: 'Inventory Milk', 
          unit: 'ml', 
          costPerUnit: 0.002, 
          currentStock: 5000, 
          wastePercentage: 0.05 
        },
      ],
    });
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'POST',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
