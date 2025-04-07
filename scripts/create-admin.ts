import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin@123", 10);
  
  const admin = await prisma.admin.create({
    data: {
      email: "admin@gmail.com",
      password: hashedPassword,
    },
  });

  console.log("Created admin:", admin);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 