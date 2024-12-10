import { PrismaClient } from "@prisma/client";
import { rofoData as data } from "@/data/rofoData";
import rofoData from "@/data/rofoConfigColumns";

const prisma = new PrismaClient();

const initialRoFoData = data;

const initialRoFoConfig = rofoData;

const seed = async () => {
  //uncomment the following line only if you're doing a full re-load and are ok with losing the existing data
  await prisma.rOFOData.deleteMany();

  for (const item of initialRoFoData) {
    await prisma.rOFOData.create({
      data: item,
    });
  }

  //uncomment the following line only if you're doing a full re-load and are ok with losing the existing data
  await prisma.rOFOConfig.deleteMany();

  for (const item of initialRoFoConfig) {
    await prisma.rOFOConfig.create({
      data: item,
    });
  }
};

seed();
