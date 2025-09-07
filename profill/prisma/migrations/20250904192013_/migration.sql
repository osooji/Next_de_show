/*
  Warnings:

  - You are about to drop the `Armor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Magic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Other` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sign` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `States` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserStates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weapon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_armorId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_itemId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_magicId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_otherId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_signId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_statesId_fkey";

-- DropForeignKey
ALTER TABLE "UserStates" DROP CONSTRAINT "UserStates_weaponId_fkey";

-- DropTable
DROP TABLE "Armor";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "Magic";

-- DropTable
DROP TABLE "Other";

-- DropTable
DROP TABLE "Sign";

-- DropTable
DROP TABLE "States";

-- DropTable
DROP TABLE "UserStates";

-- DropTable
DROP TABLE "Weapon";

-- CreateTable
CREATE TABLE "signUp" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "sex" TEXT NOT NULL,

    CONSTRAINT "signUp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "signUp_ID_key" ON "signUp"("ID");
