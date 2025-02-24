-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "card_id_key" ON "card"("id");
