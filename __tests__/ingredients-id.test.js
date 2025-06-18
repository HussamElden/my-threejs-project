import handler from '../pages/api/ingredient/[id]';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/ingredient/[id]', () => {
  let ingredient;

  beforeAll(async () => {
    ingredient = await prisma.ingredient.create({
      data: { 
        name: 'Test Ingredient', 
        unit: 'ml', 
        costPerUnit: 0.1, 
        currentStock: 500, 
        wastePercentage: 0.05 
      },
    });
  });

  afterAll(async () => {
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('updates ingredient stock and data on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: ingredient.id.toString() },
      body: {
        name: 'Updated Ingredient',
        stock: 200, // Additional stock to add
        costPerUnit: 0.15,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const updatedIngredient = JSON.parse(res._getData());
    expect(updatedIngredient.name).toBe('Updated Ingredient');
    expect(updatedIngredient.currentStock).toBe(700); // 500 + 200
    expect(updatedIngredient.costPerUnit).toBe(0.15);
  });

  test('handles non-existent ingredient on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: '99999' },
      body: {
        name: 'Non-existent',
        stock: 100,
        costPerUnit: 0.1,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Failed to update ingredient');
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: ingredient.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Method not allowed');
  });
});
