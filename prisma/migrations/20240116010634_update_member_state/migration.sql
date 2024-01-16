/*
  Warnings:

  - The `electoralSystem` column on the `MemberState` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `candidateSelection` column on the `MemberState` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `name` on the `MemberState` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MemberState" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "electoralSystem",
ADD COLUMN     "electoralSystem" TEXT,
DROP COLUMN "candidateSelection",
ADD COLUMN     "candidateSelection" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_name_key" ON "MemberState"("name");
