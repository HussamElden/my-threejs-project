import productsHandler from '../pages/api/products/index';
import recipesHandler from '../pages/api/recipes/index';
import ingredientsHandler from '../pages/api/ingredient/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('Integration Tests - Complete Recipe Workflow', () => {
  let product;
  let ingredient1;
  let ingredient2;
  let recipe;

  beforeAll(async () => {
    // Clean up any existing test data
    await prisma.recipeIngredient.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
  });

  afterAll(async () => {
    await prisma.recipeIngredient.deleteMany();
    await prisma.recipe.deleteMany();
    await prisma.product.deleteMany();
    await prisma.ingredient.deleteMany();
    await prisma.$disconnect();
  });

  test('complete workflow: create product, ingredients, and recipe', async () => {
    // Step 1: Create a product
    const { req: productReq, res: productRes } = createMocks({
      method: 'POST',
      body: {
        name: 'Cappuccino',
        category: 'Coffee',
      },
    });

    await productsHandler(productReq, productRes);
    expect(productRes._getStatusCode()).toBe(201);
    product = JSON.parse(productRes._getData());

    // Step 2: Create ingredients
    const { req: ing1Req, res: ing1Res } = createMocks({
      method: 'POST',
      body: {
        name: 'Espresso',
        unit: 'ml',
        cost: 0.08,
        currentStock: 2000,
      },
    });

    await ingredientsHandler(ing1Req, ing1Res);
    expect(ing1Res._getStatusCode()).toBe(201);
    ingredient1 = JSON.parse(ing1Res._getData());

    const { req: ing2Req, res: ing2Res } = createMocks({
      method: 'POST',
      body: {
        name: 'Steamed Milk',
        unit: 'ml',
        cost: 0.03,
        currentStock: 3000,
      },
    });

    await ingredientsHandler(ing2Req, ing2Res);
    expect(ing2Res._getStatusCode()).toBe(201);
    ingredient2 = JSON.parse(ing2Res._getData());

    // Step 3: Create a recipe combining the product and ingredients
    const { req: recipeReq, res: recipeRes } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        variant: 'Regular',
        ingredients: [
          {
            ingredientId: ingredient1.id,
            quantity: 30,
          },
          {
            ingredientId: ingredient2.id,
            quantity: 120,
          },
        ],
      },
    });

    await recipesHandler(recipeReq, recipeRes);
    expect(recipeRes._getStatusCode()).toBe(201);
    recipe = JSON.parse(recipeRes._getData());

    // Verify the complete recipe structure
    expect(recipe.variant).toBe('Regular');
    expect(recipe.product.name).toBe('Cappuccino');
    expect(recipe.ingredients).toHaveLength(2);
    
    const espressoIngredient = recipe.ingredients.find(
      ing => ing.ingredient.name === 'Espresso'
    );
    const milkIngredient = recipe.ingredients.find(
      ing => ing.ingredient.name === 'Steamed Milk'
    );
    
    expect(espressoIngredient.quantity).toBe(30);
    expect(milkIngredient.quantity).toBe(120);
  });

  test('verify data consistency across APIs', async () => {
    // Test that all created data can be retrieved correctly
    
    // Get all products
    const { req: getAllProductsReq, res: getAllProductsRes } = createMocks({
      method: 'GET',
    });

    await productsHandler(getAllProductsReq, getAllProductsRes);
    expect(getAllProductsRes._getStatusCode()).toBe(200);
    const allProducts = JSON.parse(getAllProductsRes._getData());
    
    const createdProduct = allProducts.find(p => p.name === 'Cappuccino');
    expect(createdProduct).toBeDefined();
    expect(createdProduct.recipes).toHaveLength(1);

    // Get all ingredients
    const { req: getAllIngredientsReq, res: getAllIngredientsRes } = createMocks({
      method: 'GET',
    });

    await ingredientsHandler(getAllIngredientsReq, getAllIngredientsRes);
    expect(getAllIngredientsRes._getStatusCode()).toBe(200);
    const allIngredients = JSON.parse(getAllIngredientsRes._getData());
    
    expect(allIngredients.some(ing => ing.name === 'Espresso')).toBe(true);
    expect(allIngredients.some(ing => ing.name === 'Steamed Milk')).toBe(true);

    // Get all recipes
    const { req: getAllRecipesReq, res: getAllRecipesRes } = createMocks({
      method: 'GET',
    });

    await recipesHandler(getAllRecipesReq, getAllRecipesRes);
    expect(getAllRecipesRes._getStatusCode()).toBe(200);
    const allRecipes = JSON.parse(getAllRecipesRes._getData());
    
    const createdRecipe = allRecipes.find(r => r.variant === 'Regular');
    expect(createdRecipe).toBeDefined();
    expect(createdRecipe.product.name).toBe('Cappuccino');
  });

  test('handles complex relational queries correctly', async () => {
    // Create additional recipes for the same product to test complex relationships
    const { req: recipeReq, res: recipeRes } = createMocks({
      method: 'POST',
      body: {
        productId: product.id,
        variant: 'Large',
        ingredients: [
          {
            ingredientId: ingredient1.id,
            quantity: 60, // Double espresso
          },
          {
            ingredientId: ingredient2.id,
            quantity: 180, // More milk
          },
        ],
      },
    });

    await recipesHandler(recipeReq, recipeRes);
    expect(recipeRes._getStatusCode()).toBe(201);

    // Verify the product now has multiple recipes
    const { req: getAllProductsReq, res: getAllProductsRes } = createMocks({
      method: 'GET',
    });

    await productsHandler(getAllProductsReq, getAllProductsRes);
    const allProducts = JSON.parse(getAllProductsRes._getData());
    const cappuccino = allProducts.find(p => p.name === 'Cappuccino');
    
    expect(cappuccino.recipes).toHaveLength(2);
    expect(cappuccino.recipes.some(r => r.variant === 'Regular')).toBe(true);
    expect(cappuccino.recipes.some(r => r.variant === 'Large')).toBe(true);
  });
});
