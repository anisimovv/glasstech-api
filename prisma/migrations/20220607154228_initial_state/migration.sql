-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Shower" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "minPrice" INTEGER NOT NULL,
    "maxPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowerElement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "minValue" INTEGER NOT NULL,
    "maxValue" INTEGER NOT NULL,
    "defaultValue" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "showerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShowerElement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Glass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Glass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowerBinding" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "showerId" TEXT,

    CONSTRAINT "ShowerBinding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ShowerElement" ADD CONSTRAINT "ShowerElement_showerId_fkey" FOREIGN KEY ("showerId") REFERENCES "Shower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowerBinding" ADD CONSTRAINT "ShowerBinding_showerId_fkey" FOREIGN KEY ("showerId") REFERENCES "Shower"("id") ON DELETE SET NULL ON UPDATE CASCADE;
