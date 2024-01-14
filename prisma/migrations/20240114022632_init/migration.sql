-- CreateEnum
CREATE TYPE "Country" AS ENUM ('AUSTRIA', 'BELGIUM', 'BULGARIA', 'CROATIA', 'CYPRUS', 'CZECHIA', 'DENMARK', 'ESTONIA', 'FINLAND', 'FRANCE', 'GERMANY', 'GREECE', 'HUNGARY', 'IRELAND', 'ITALY', 'LATVIA', 'LITHUANIA', 'LUXEMBOURG', 'MALTA', 'NETHERLANDS', 'POLAND', 'PORTUGAL', 'ROMANIA', 'SLOVAKIA', 'SLOVENIA', 'SPAIN', 'SWEDEN');

-- CreateEnum
CREATE TYPE "ElectoralSystem" AS ENUM ('D_HONDT', 'LARGEST_REMAINDER', 'MODIFIED_SAINTE_LAGUE', 'SAINTE_LAGUE', 'SINGLE_TRANSFERABLE_VOTE');

-- CreateEnum
CREATE TYPE "CandidateSelection" AS ENUM ('CLOSED_LIST', 'OPEN_LIST', 'SEMI_OPEN_LIST', 'SINGLE_TRANSFERABLE_VOTE');

-- CreateEnum
CREATE TYPE "PoliticalGroupAcronym" AS ENUM ('EPP', 'S_D', 'RENEW', 'GREENS_EFA', 'ECR', 'ID', 'TL', 'NI');

-- CreateTable
CREATE TABLE "Election" (
    "year" SMALLINT NOT NULL,
    "month" SMALLINT,
    "days" SMALLINT[],

    CONSTRAINT "Election_pkey" PRIMARY KEY ("year")
);

-- CreateTable
CREATE TABLE "MemberState" (
    "id" TEXT NOT NULL,
    "name" "Country" NOT NULL,
    "seats" SMALLINT,
    "electionDates" DATE[],
    "votingAge" SMALLINT,
    "compulsoryVoting" BOOLEAN,
    "candidacyAge" SMALLINT,
    "constituencies" SMALLINT,
    "threshold" SMALLINT,
    "electoralSystem" "ElectoralSystem",
    "candidateSelection" "CandidateSelection",

    CONSTRAINT "MemberState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoliticalGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" "PoliticalGroupAcronym" NOT NULL,

    CONSTRAINT "PoliticalGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "politicalGroupId" TEXT,
    "memberStateId" TEXT,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "fullName" TEXT,
    "birthdate" DATE,
    "photoUrl" TEXT,
    "bio" TEXT,
    "partyId" TEXT,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_name_key" ON "MemberState"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PoliticalGroup_acronym_key" ON "PoliticalGroup"("acronym");

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_politicalGroupId_fkey" FOREIGN KEY ("politicalGroupId") REFERENCES "PoliticalGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_memberStateId_fkey" FOREIGN KEY ("memberStateId") REFERENCES "MemberState"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;
