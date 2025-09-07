/*
  Warnings:

  - You are about to drop the column `Arrow` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `ArrowStr` on the `item` table. All the data in the column will be lost.
  - Added the required column `Armor` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ArmorStr` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `other` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "Arrow",
DROP COLUMN "ArrowStr",
ADD COLUMN     "Armor" TEXT NOT NULL,
ADD COLUMN     "ArmorStr" INTEGER NOT NULL,
ADD COLUMN     "ID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "other" ADD COLUMN     "ID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "states" ADD COLUMN     "ID" TEXT NOT NULL;
