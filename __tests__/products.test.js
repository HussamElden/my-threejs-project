import handler from '../pages/api/products/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/products', () => {
  beforeAll(async () => {
    await prisma.product.createMany({
      data: [
        { name: 'Coffee', category: 'Beverage' },
        { name: 'Tea', category: 'Beverage' },
      ],
    });
  });

  afterAll(async () => {
    await prisma.product.deleteMany();
    await prisma.$disconnect();
  });

  test('returns all products on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const products = JSON.parse(res._getData());
    expect(products.length).toBe(2);
    expect(products[0].name).toBe('Coffee');
  });

  test('creates a new product on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Muffin',
        category: 'Pastry',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    const product = JSON.parse(res._getData());
    expect(product.name).toBe('Muffin');

    const dbProduct = await prisma.product.findFirst({
      where: { name: 'Muffin' },
    });
    expect(dbProduct).not.toBeNull();
  });

  test('validates required fields on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Incomplete Product',
        // Missing category
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Name and category are required');
  });

  test('handles validation errors on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: null, // Invalid data
        category: 'Test',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Name and category are required');
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
