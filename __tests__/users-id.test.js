import handler from '../pages/api/users/[id]';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('/api/users/[id]', () => {
  let user;

  beforeAll(async () => {
    const hashedPassword = await bcrypt.hash('testpass123', 10);
    user = await prisma.user.create({
      data: { 
        name: 'Test User', 
        email: 'test@example.com', 
        password: hashedPassword, 
        role: 'BARISTA' 
      },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  test('returns specific user on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: user.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const responseUser = JSON.parse(res._getData());
    expect(responseUser.id).toBe(user.id);
    expect(responseUser.name).toBe('Test User');
    expect(responseUser.email).toBe('test@example.com');
  });

  test('returns 404 for non-existent user on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: '99999' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('User not found');
  });

  test('updates user on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: user.id.toString() },
      body: {
        name: 'Updated User',
        email: 'updated@example.com',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const updatedUser = JSON.parse(res._getData());
    expect(updatedUser.name).toBe('Updated User');
    expect(updatedUser.email).toBe('updated@example.com');
  });

  test('handles invalid data on PUT', async () => {
    const { req, res } = createMocks({
      method: 'PUT',
      query: { id: '99999' },
      body: {
        name: 'Invalid Update',
        email: 'invalid@example.com',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Update failed');
  });

  test('deletes user on DELETE', async () => {
    const testUser = await prisma.user.create({
      data: { 
        name: 'To Delete', 
        email: 'delete@example.com', 
        password: 'password123', 
        role: 'BARISTA' 
      },
    });

    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: testUser.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(204);

    // Verify user was deleted
    const deletedUser = await prisma.user.findUnique({
      where: { id: testUser.id },
    });
    expect(deletedUser).toBeNull();
  });

  test('handles non-existent user on DELETE', async () => {
    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: '99999' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Delete failed');
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'PATCH',
      query: { id: user.id.toString() },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
