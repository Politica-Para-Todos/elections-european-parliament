/*
  Warnings:

  - The primary key for the `Candidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `memberStateId` on the `Candidate` table. All the data in the column will be lost.
  - The primary key for the `MemberState` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `startDate` on the `MemberState` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `MemberState` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `partyId` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `name` on the `MemberState` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Country" AS ENUM ('AUSTRIA', 'BELGIUM', 'BULGARIA', 'CROATIA', 'CYPRUS', 'CZECHIA', 'DENMARK', 'ESTONIA', 'FINLAND', 'FRANCE', 'GERMANY', 'GREECE', 'HUNGARY', 'IRELAND', 'ITALY', 'LATVIA', 'LITHUANIA', 'LUXEMBOURG', 'MALTA', 'NETHERLANDS', 'POLAND', 'PORTUGAL', 'ROMANIA', 'SLOVAKIA', 'SLOVENIA', 'SPAIN', 'SWEDEN');

-- CreateEnum
CREATE TYPE "ElectoralSystem" AS ENUM ('D_HONDT', 'LARGEST_REMAINDER', 'MODIFIED_SAINTE_LAGUE', 'SAINTE_LAGUE', 'SINGLE_TRANSFERABLE_VOTE');

-- CreateEnum
CREATE TYPE "CandidateSelection" AS ENUM ('CLOSED_LIST', 'OPEN_LIST', 'SEMI_OPEN_LIST', 'SINGLE_TRANSFERABLE_VOTE');

-- CreateEnum
CREATE TYPE "PoliticalGroupAcronym" AS ENUM ('EPP', 'S_D', 'RENEW', 'GREENS_EFA', 'ECR', 'ID', 'TL', 'NI');

-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_memberStateId_fkey";

-- AlterTable
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_pkey",
DROP COLUMN "memberStateId",
ADD COLUMN     "partyId" TEXT NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MemberState" DROP CONSTRAINT "MemberState_pkey",
DROP COLUMN "startDate",
ADD COLUMN     "candidacyAge" SMALLINT,
ADD COLUMN     "candidateSelection" "CandidateSelection",
ADD COLUMN     "compulsoryVoting" BOOLEAN,
ADD COLUMN     "constituencies" SMALLINT,
ADD COLUMN     "electionDate" DATE[],
ADD COLUMN     "electoralSystem" "ElectoralSystem",
ADD COLUMN     "seats" SMALLINT,
ADD COLUMN     "threshold" SMALLINT,
ADD COLUMN     "votingAge" SMALLINT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "name",
ADD COLUMN     "name" "Country" NOT NULL,
ADD CONSTRAINT "MemberState_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Election" (
    "year" SMALLINT NOT NULL,
    "month" SMALLINT NOT NULL,
    "days" SMALLINT[],

    CONSTRAINT "Election_pkey" PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "PoliticalGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" "PoliticalGroupAcronym" NOT NULL,
    "memberStateId" TEXT NOT NULL,

    CONSTRAINT "PoliticalGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "politicalGroupId" TEXT NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PoliticalGroup_acronym_key" ON "PoliticalGroup"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_name_key" ON "MemberState"("name");

-- AddForeignKey
ALTER TABLE "PoliticalGroup" ADD CONSTRAINT "PoliticalGroup_memberStateId_fkey" FOREIGN KEY ("memberStateId") REFERENCES "MemberState"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_politicalGroupId_fkey" FOREIGN KEY ("politicalGroupId") REFERENCES "PoliticalGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
