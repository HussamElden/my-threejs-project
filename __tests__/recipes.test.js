import handler from '../pages/api/recipes/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/recipes', () => {
  let product;
  let ingredient;

  beforeAll(async () => {
    product = await prisma.product.create({
      data: { name: 'Coffee', category: 'Beverage' },
    });
    ingredient = await prisma.ingredient.create({
      data: { name: 'Milk', unit: 'ml', costPerUnit: 0.1, currentStock: 1000, wastePercentage: 0 },
    });
  });

  afterAll(async () => {
    await prisma.recipeIngredient.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('returns all recipes on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  test('creates a new recipe on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        variant: 'Latte',
        ingredients: [
          {
            ingredientId: ingredient.id,
            quantity: 150,
          },
        ],
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    const recipe = JSON.parse(res._getData());
    expect(recipe.variant).toBe('Latte');
    expect(recipe.ingredients.length).toBe(1);
    expect(recipe.ingredients[0].ingredient.name).toBe('Milk');
  });

  test('validates required fields on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        // Missing variant and ingredients
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('ProductId, variant, and ingredients array are required');
  });

  test('validates ingredient existence on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        variant: 'Test Recipe',
        ingredients: [
          {
            ingredientId: 99999, // Non-existent ingredient
            quantity: 100,
          },
        ],
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Some ingredients do not exist');
  });

  test('handles invalid ingredients array on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        variant: 'Test Recipe',
        ingredients: 'not an array',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('ProductId, variant, and ingredients array are required');
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'PATCH',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Method PATCH not allowed');
  });
});
