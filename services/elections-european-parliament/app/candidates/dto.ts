import { MemberState } from '../google-spreadsheet-client/spreadhseet-types'

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
