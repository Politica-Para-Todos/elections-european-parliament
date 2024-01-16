/*
  Warnings:

  - Changed the type of `acronym` on the `PoliticalGroup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PoliticalGroup" DROP COLUMN "acronym",
ADD COLUMN     "acronym" TEXT NOT NULL;

-- DropEnum
DROP TYPE "CandidateSelection";

-- DropEnum
DROP TYPE "Country";

-- DropEnum
DROP TYPE "ElectoralSystem";

-- DropEnum
DROP TYPE "PoliticalGroupAcronym";

-- CreateIndex
CREATE UNIQUE INDEX "PoliticalGroup_acronym_key" ON "PoliticalGroup"("acronym");
