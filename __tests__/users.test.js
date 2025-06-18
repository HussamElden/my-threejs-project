import handler from '../pages/api/users/index';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('/api/users', () => {
  beforeAll(async () => {
    const hashedPassword = await bcrypt.hash('testpass123', 10);
    await prisma.user.createMany({
      data: [
        { 
          name: 'John Doe', 
          email: 'john@example.com', 
          password: hashedPassword, 
          role: 'BARISTA' 
        },
        { 
          name: 'Jane Smith', 
          email: 'jane@example.com', 
          password: hashedPassword, 
          role: 'MANAGER' 
        },
      ],
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  test('returns all users on GET', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const users = JSON.parse(res._getData());
    expect(users.length).toBeGreaterThanOrEqual(2);
    expect(users.some(user => user.email === 'john@example.com')).toBe(true);
  });

  test('creates new user on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'securepass456',
        role: 'ADMIN',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    const user = JSON.parse(res._getData());
    expect(user.name).toBe('Alice Johnson');
    expect(user.email).toBe('alice@example.com');
    expect(user.role).toBe('ADMIN');
    expect(user.password).not.toBe('securepass456'); // Should be hashed

    // Verify password was hashed
    const isPasswordValid = await bcrypt.compare('securepass456', user.password);
    expect(isPasswordValid).toBe(true);
  });

  test('handles duplicate email on POST', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Duplicate User',
        email: 'john@example.com', // Already exists
        password: 'password123',
        role: 'BARISTA',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Could not create user');
  });

  test('returns 405 for unsupported methods', async () => {
    const { req, res } = createMocks({
      method: 'DELETE',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
