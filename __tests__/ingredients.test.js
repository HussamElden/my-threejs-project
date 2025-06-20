import handler from '../pages/api/ingredient/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/ingredient', () => {
  beforeAll(async () => {
    await prisma.ingredient.createMany({
      data: [
        { 
          name: 'Coffee Beans', 
          unit: 'g', 
          costPerUnit: 0.02, 
          currentStock: 5000, 
          wastePercentage: 0.1 
        },
        { 
          name: 'Sugar', 
          unit: 'g', 
          costPerUnit: 0.001, 
          currentStock: 2000, 
          wastePercentage: 0 
        },
      ],
    });
  });

  afterAll(async () => {
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('returns all ingredients on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const ingredients = JSON.parse(res._getData());
    expect(ingredients.length).toBeGreaterThanOrEqual(2);
    expect(ingredients.some(ing => ing.name === 'Coffee Beans')).toBe(true);
  });

  test('creates new ingredient on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Vanilla Syrup',
        unit: 'ml',
        cost: 0.05,
        currentStock: 1000,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    const ingredient = JSON.parse(res._getData());
    expect(ingredient.name).toBe('Vanilla Syrup');
    expect(ingredient.unit).toBe('ml');
    expect(ingredient.costPerUnit).toBe(0.05);
    expect(ingredient.wastePercentage).toBe(0.0);

    // Verify it was saved to database
    const dbIngredient = await prisma.ingredient.findFirst({
      where: { name: 'Vanilla Syrup' },
    });
    expect(dbIngredient).not.toBeNull();
  });

  test('rejects invalid units on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Test Ingredient',
        unit: 'invalid_unit', // Invalid unit
        currentStock: 100,
        cost: 15.50,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Invalid unit. Please select a valid unit from the dropdown.');
  });

  test('handles database errors on POST', async () => {
    // Mock Prisma to throw a database error
    const originalCreate = prisma.ingredient.create;
    prisma.ingredient.create = jest.fn().mockRejectedValue(new Error('Database connection failed'));

    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Test Ingredient',
        unit: 'g', // Valid unit to pass validation
        currentStock: 100,
        cost: 15.50,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Failed to create ingredient');

    // Restore the original method
    prisma.ingredient.create = originalCreate;
  });

  test('deletes ingredient on DELETE', async () => {
    const ingredient = await prisma.ingredient.create({
      data: { 
        name: 'To Delete', 
        unit: 'g', 
        costPerUnit: 0.01, 
        currentStock: 100, 
        wastePercentage: 0 
      },
    });

    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: ingredient.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(204);

    // Verify ingredient was deleted
    const deletedIngredient = await prisma.ingredient.findUnique({
      where: { id: ingredient.id },
    });
    expect(deletedIngredient).toBeNull();
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'PATCH',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Method not allowed');
  });
});
