"use server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// CREATE
export async function addROFOData(
  data: Prisma.ROFODataCreateInput | Prisma.ROFODataCreateInput[]
) {
  if (Array.isArray(data)) {
    return await prisma.rOFOData.createMany({
      data: data,
    });
  } else {
    return await prisma.rOFOData.create({
      data: data,
    });
  }
}

export async function addConfigColumns(
  data: Prisma.ROFOConfigCreateInput | Prisma.ROFOConfigCreateInput[]
) {
  if (Array.isArray(data)) {
    return await prisma.rOFOConfig.createMany({
      data: data,
    });
  } else {
    return await prisma.rOFOConfig.create({
      data: data,
    });
  }
}

// READ
export async function getAllROFOData() {
  return await prisma.rOFOData.findMany();
}

export async function getAllConfigColumns() {
  return await prisma.rOFOConfig.findMany();
}

//UPDATE
export async function updateROFODataById(
  id: number,
  data: Prisma.ROFODataUpdateInput
) {
  return await prisma.rOFOData.update({
    where: {
      Id: id,
    },
    data: data,
  });
}

export async function updateROFOConfigColumnById(
  id: number,
  data: Prisma.ROFOConfigUpdateInput
) {
  return await prisma.rOFOConfig.update({
    where: {
      columnpk: id,
    },
    data: data,
  });
}

//DELETE

export async function deleteROFODataById(id: number) {
  return await prisma.rOFOData.delete({
    where: {
      Id: id,
    },
  });
}
export async function deleteROFOConfigColumnById(id: number) {
  return await prisma.rOFOConfig.delete({
    where: {
      columnpk: id,
    },
  });
}
