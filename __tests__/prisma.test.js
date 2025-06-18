import prisma from '../lib/prisma';

describe('Prisma Client', () => {
  test('connects to database successfully', async () => {
    expect(prisma).toBeDefined();
    
    // Test basic connection by trying to count users
    const userCount = await prisma.user.count();
    expect(typeof userCount).toBe('number');
  });

  test('handles database queries correctly', async () => {
    // Create a test user
    const user = await prisma.user.create({
      data: {
        name: 'Prisma Test User',
        email: 'prisma@test.com',
        password: 'testpass',
        role: 'BARISTA',
      },
    });

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBe('Prisma Test User');

    // Clean up
    await prisma.user.delete({
      where: { id: user.id },
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
