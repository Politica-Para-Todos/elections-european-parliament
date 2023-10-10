-- CreateTable
CREATE TABLE "Election" (
    "id" BIGINT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "days" INTEGER[],

    CONSTRAINT "Election_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElectoralSystem" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ElectoralSystem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateSelection" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CandidateSelection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AbsenteeVoting" (
    "id" BIGINT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AbsenteeVoting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberState" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "votingAge" INTEGER NOT NULL,
    "electionDate" TEXT NOT NULL,
    "compulsoryVoting" BOOLEAN NOT NULL,
    "absenteeVotingId" BIGINT,
    "constituencies" INTEGER NOT NULL,
    "electoralSystemId" BIGINT,
    "candidateSelectionId" BIGINT,
    "electionId" BIGINT NOT NULL,

    CONSTRAINT "MemberState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoliticalGroup" (
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "electionId" BIGINT NOT NULL,

    CONSTRAINT "PoliticalGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" BIGINT NOT NULL,
    "acronym" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "memberStateId" BIGINT NOT NULL,
    "electionId" BIGINT NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" BIGINT NOT NULL,
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "isLeadCandidate" BOOLEAN NOT NULL,
    "bio" TEXT,
    "profilePic" TEXT,
    "partyId" BIGINT NOT NULL,
    "electionId" BIGINT NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_absenteeVotingId_key" ON "MemberState"("absenteeVotingId");

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_electoralSystemId_key" ON "MemberState"("electoralSystemId");

-- CreateIndex
CREATE UNIQUE INDEX "MemberState_candidateSelectionId_key" ON "MemberState"("candidateSelectionId");

-- AddForeignKey
ALTER TABLE "MemberState" ADD CONSTRAINT "MemberState_absenteeVotingId_fkey" FOREIGN KEY ("absenteeVotingId") REFERENCES "AbsenteeVoting"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberState" ADD CONSTRAINT "MemberState_electoralSystemId_fkey" FOREIGN KEY ("electoralSystemId") REFERENCES "ElectoralSystem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberState" ADD CONSTRAINT "MemberState_candidateSelectionId_fkey" FOREIGN KEY ("candidateSelectionId") REFERENCES "CandidateSelection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberState" ADD CONSTRAINT "MemberState_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoliticalGroup" ADD CONSTRAINT "PoliticalGroup_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_memberStateId_fkey" FOREIGN KEY ("memberStateId") REFERENCES "MemberState"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE CASCADE ON UPDATE CASCADE;
