// pages/api/users/index.js
import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email, password, role } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, role },
      });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(400).json({ error: "Could not create user" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
