import handler from '../pages/api/products/[id]';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';

describe('/api/products/[id]', () => {
  let product;

  beforeAll(async () => {
    product = await prisma.product.create({
      data: { name: 'Espresso', category: 'Coffee' },
    });
  });

  afterAll(async () => {
    await prisma.product.deleteMany();
    await prisma.$disconnect();
  });

  test('returns specific product on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: product.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseProduct = JSON.parse(res._getData());
    expect(responseProduct.id).toBe(product.id);
    expect(responseProduct.name).toBe('Espresso');
  });

  test('returns 404 for non-existent product on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: '99999' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Product not found');
  });

  test('updates product on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: product.id.toString() },
      body: {
        name: 'Updated Espresso',
        category: 'Premium Coffee',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const updatedProduct = JSON.parse(res._getData());
    expect(updatedProduct.name).toBe('Updated Espresso');
    expect(updatedProduct.category).toBe('Premium Coffee');
  });

  test('deletes product on DELETE', async () => {
    const testProduct = await prisma.product.create({
      data: { name: 'To Delete', category: 'Test' },
    });

    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: testProduct.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const response = JSON.parse(res._getData());
    expect(response.message).toBe('Product deleted successfully');

    // Verify product was deleted
    const deletedProduct = await prisma.product.findUnique({
      where: { id: testProduct.id },
    });
    expect(deletedProduct).toBeNull();
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'PATCH',
      query: { id: product.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
