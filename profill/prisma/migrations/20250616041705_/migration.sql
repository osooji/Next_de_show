/*
  Warnings:

  - You are about to drop the column `Armor` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `ArmorStr` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `Weapon` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `WeaponStr` on the `item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "Armor",
DROP COLUMN "ArmorStr",
DROP COLUMN "Weapon",
DROP COLUMN "WeaponStr";

-- CreateTable
CREATE TABLE "weapon" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "Weapon" TEXT NOT NULL,
    "WeaponStr" INTEGER NOT NULL,

    CONSTRAINT "weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armor" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "Armor" TEXT NOT NULL,
    "ArmorStr" INTEGER NOT NULL,

    CONSTRAINT "armor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "magic" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "Magic" TEXT NOT NULL,
    "Sp" INTEGER NOT NULL,

    CONSTRAINT "magic_pkey" PRIMARY KEY ("id")
);
