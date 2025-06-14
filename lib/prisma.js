// lib/prisma.js
import { PrismaClient } from "../prisma/generated/prisma";

const prisma =
  process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : global.prisma || (global.prisma = new PrismaClient());

export default prisma;
