import handler from '../pages/api/auth';
import { createMocks } from 'node-mocks-http';
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

describe('/api/auth', () => {
  beforeAll(async () => {
    // Create a test user for login tests
    const hashedPassword = await bcrypt.hash('testpass123', 10);
    await prisma.user.create({
      data: { 
        name: 'Login User',
        email: 'login@example.com', 
        password: hashedPassword, 
        role: 'BARISTA' 
      },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  test('successfully logs in with valid credentials', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'login@example.com',
        password: 'testpass123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const response = JSON.parse(res._getData());
    expect(response.user).toBeDefined();
    expect(response.user.email).toBe('login@example.com');
    expect(response.user.name).toBe('Login User');
    expect(response.user.password).toBeUndefined(); // Password should not be in response
  });

  test('rejects login with invalid credentials', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'login@example.com',
        password: 'wrongpassword',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Invalid email or password');
  });

  test('rejects login for non-existent user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'nonexistent@example.com',
        password: 'password123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(401);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Invalid email or password');
  });

  test('validates required fields for login', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@example.com',
        // Missing password
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Email and password are required');
  });

  test('registers new user successfully', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        action: 'register',
        name: 'Register User',
        email: 'register@example.com',
        password: 'newpassword123',
        role: 'MANAGER',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(201);
    const response = JSON.parse(res._getData());
    expect(response.user).toBeDefined();
    expect(response.user.email).toBe('register@example.com');
    expect(response.user.role).toBe('MANAGER');
    expect(response.user.password).toBeUndefined(); // Password should not be in response

    // Verify user was created in database
    const dbUser = await prisma.user.findUnique({
      where: { email: 'register@example.com' },
    });
    expect(dbUser).not.toBeNull();
  });

  test('handles registration errors', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        action: 'register',
        name: 'Existing User',
        email: 'login@example.com', // Already exists
        password: 'password123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(500);
    const response = JSON.parse(res._getData());
    expect(response.error).toBe('Registration failed');
  });

  test('returns 405 for non-POST methods', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
