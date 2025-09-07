/*
  Warnings:

  - You are about to drop the `armor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `magic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `other` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `weapon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "armor";

-- DropTable
DROP TABLE "item";

-- DropTable
DROP TABLE "magic";

-- DropTable
DROP TABLE "other";

-- DropTable
DROP TABLE "states";

-- DropTable
DROP TABLE "weapon";

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    "C" INTEGER NOT NULL,
    "D" INTEGER NOT NULL,
    "E" INTEGER NOT NULL,
    "F" INTEGER NOT NULL,
    "G" INTEGER NOT NULL,
    "H" INTEGER NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Other" (
    "id" SERIAL NOT NULL,
    "Exp" INTEGER NOT NULL,
    "Price" INTEGER NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "Weapon" TEXT NOT NULL,
    "WeaponStr" INTEGER NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Armor" (
    "id" SERIAL NOT NULL,
    "Armor" TEXT NOT NULL,
    "ArmorStr" INTEGER NOT NULL,

    CONSTRAINT "Armor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "Item" TEXT NOT NULL,
    "Num" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Magic" (
    "id" SERIAL NOT NULL,
    "Magic" TEXT NOT NULL,
    "Sp" INTEGER NOT NULL,

    CONSTRAINT "Magic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStates" (
    "signId" INTEGER NOT NULL,
    "statesId" INTEGER NOT NULL,
    "otherId" INTEGER NOT NULL,
    "weaponId" INTEGER NOT NULL,
    "armorId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "magicId" INTEGER NOT NULL,

    CONSTRAINT "UserStates_pkey" PRIMARY KEY ("signId","statesId","otherId","weaponId","armorId","itemId","magicId")
);

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_signId_fkey" FOREIGN KEY ("signId") REFERENCES "Sign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_statesId_fkey" FOREIGN KEY ("statesId") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_otherId_fkey" FOREIGN KEY ("otherId") REFERENCES "Other"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_armorId_fkey" FOREIGN KEY ("armorId") REFERENCES "Armor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStates" ADD CONSTRAINT "UserStates_magicId_fkey" FOREIGN KEY ("magicId") REFERENCES "Magic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
