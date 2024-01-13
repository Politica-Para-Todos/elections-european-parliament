import { MemberState } from '@prisma/client';

export interface Candidate {
  id: number,
  listNumber: number,
  shortName: string,
  fullName: string,
  photoUrl: URL,
  bio?: string,
  memberState: MemberState,
  partyAcronym: string
}
