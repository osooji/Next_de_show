import { PrismaClient } from "@prisma/client"

// import {env} from "@/env"

function createPrismaClient () {
  return new PrismaClient({
    // log:
    // env.NODE_ENV === "development" ? ["query"] : ["error"]
  })
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// if(env.NODE_ENV !== "development") globalForPrisma.prisma = prisma;