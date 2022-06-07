import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const userHashedPassword = await bcrypt.hash('password', 10);
  const testUser = await prisma.user.upsert({
    where: { email: 'test@user.io' },
    update: {},
    create: {
      email: 'test@user.io',
      password: userHashedPassword,
    },
  });

  const showerCuba = await prisma.shower.upsert({
    where: { id: '3735adbf-e7c9-441c-9e7a-63162e818809' },
    update: {},
    create: {
      name: 'Куба',
      minPrice: 5000,
      maxPrice: 20000,
      elements: {
        create: [
          {
            title: 'Ширина двери',
            minValue: 600,
            maxValue: 1100,
            defaultValue: 800,
            type: 'WIDTH',
          },
          {
            title: 'Глубина',
            minValue: 600,
            maxValue: 1500,
            defaultValue: 800,
            type: 'WIDTH',
          },
          {
            title: 'Высота',
            minValue: 1800,
            maxValue: 3200,
            defaultValue: 2800,
            type: 'HEIGHT',
          },
        ],
      },
      bindings: {
        create: [
          { title: 'Профильная система крепления', price: 5000 },
          { title: 'Безпрофильная система крепления', price: 6400 },
        ],
      },
    },
  });

  const showerBali = await prisma.shower.upsert({
    where: { id: '6cf24829-0bdd-4301-84d4-f257130544c6' },
    update: {},
    create: {
      name: 'Бали',
      minPrice: 5000,
      maxPrice: 25000,
      elements: {
        create: [
          {
            title: 'Ширина входной группы',
            minValue: 600,
            maxValue: 1100,
            defaultValue: 800,
            type: 'WIDTH',
          },
          {
            title: 'Глубина',
            minValue: 600,
            maxValue: 1500,
            defaultValue: 800,
            type: 'WIDTH',
          },
          {
            title: 'Высота',
            minValue: 1800,
            maxValue: 3200,
            defaultValue: 2800,
            type: 'HEIGHT',
          },
        ],
      },
      bindings: {
        create: [
          { title: 'Профильная система крепления', price: 6000 },
          { title: 'Безпрофильная система крепления', price: 7200 },
        ],
      },
    },
  });

  const glassTransp = await prisma.glass.upsert({
    where: { id: 'e8380d9f-99c3-4731-b80e-6431189c3d71' },
    update: {},
    create: {
      name: 'Прозрачное',
      price: 900,
    },
  });

  const glassDiamant = await prisma.glass.upsert({
    where: { id: 'b2457560-341a-4d58-89e7-55cf35834e4c' },
    update: {},
    create: {
      name: 'Диамант',
      price: 1800,
    },
  });

  console.log({ testUser, showerCuba, showerBali, glassTransp, glassDiamant });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
