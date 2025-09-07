-- CreateTable
CREATE TABLE "Sign" (
    "id" SERIAL NOT NULL,
    "ID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    "C" INTEGER NOT NULL,
    "D" INTEGER NOT NULL,
    "E" INTEGER NOT NULL,
    "F" INTEGER NOT NULL,
    "G" INTEGER NOT NULL,
    "H" INTEGER NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "other" (
    "id" SERIAL NOT NULL,
    "Exp" INTEGER NOT NULL,
    "Price" INTEGER NOT NULL,

    CONSTRAINT "other_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "Weapon" TEXT NOT NULL,
    "WeaponStr" INTEGER NOT NULL,
    "Arrow" TEXT NOT NULL,
    "ArrowStr" INTEGER NOT NULL,
    "Item" TEXT NOT NULL,
    "Num" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
