import handler from '../pages/api/recipes/[id]';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/recipes/[id]', () => {
  let product;
  let ingredient;
  let recipe;

  beforeAll(async () => {
    product = await prisma.product.create({
      data: { name: 'Latte', category: 'Coffee' },
    });
    ingredient = await prisma.ingredient.create({
      data: { 
        name: 'Steamed Milk', 
        unit: 'ml', 
        costPerUnit: 0.05, 
        currentStock: 2000, 
        wastePercentage: 0.05 
      },
    });
    recipe = await prisma.recipe.create({
      data: {
        productId: product.id,
        variant: 'Original',
      },
    });
    await prisma.recipeIngredient.create({
      data: {
        recipeId: recipe.id,
        ingredientId: ingredient.id,
        quantity: 200,
      },
    });
  });

  afterAll(async () => {
    await prisma.recipeIngredient.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('returns specific recipe on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: recipe.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseRecipe = JSON.parse(res._getData());
    expect(responseRecipe.id).toBe(recipe.id);
    expect(responseRecipe.variant).toBe('Original');
    expect(responseRecipe.product.name).toBe('Latte');
    expect(responseRecipe.ingredients.length).toBe(1);
  });

  test('returns 404 for non-existent recipe on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: '99999' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Recipe not found');
  });

  test('updates recipe on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: recipe.id.toString() },
      body: {
        variant: 'Extra Large',
        ingredients: [
          {
            ingredientId: ingredient.id,
            quantity: 300,
          },
        ],
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const updatedRecipe = JSON.parse(res._getData());
    expect(updatedRecipe.variant).toBe('Extra Large');
    expect(updatedRecipe.ingredients.length).toBe(1);
    expect(updatedRecipe.ingredients[0].quantity).toBe(300);
  });

  test('validates required fields on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: recipe.id.toString() },
      body: {
        variant: 'Test',
        // Missing ingredients
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Variant and ingredients array are required');
  });

  test('deletes recipe on DELETE', async () => {
    const testRecipe = await prisma.recipe.create({
      data: {
        productId: product.id,
        variant: 'To Delete',
      },
    });

    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: testRecipe.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const response = JSON.parse(res._getData());
    expect(response.message).toBe('Recipe deleted successfully');

    // Verify recipe was deleted
    const deletedRecipe = await prisma.recipe.findUnique({
      where: { id: testRecipe.id },
    });
    expect(deletedRecipe).toBeNull();
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'PATCH',
      query: { id: recipe.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
