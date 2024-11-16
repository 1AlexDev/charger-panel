-- CreateTable
CREATE TABLE "Charger" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "signedOutBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Charger_pkey" PRIMARY KEY ("id")
);
