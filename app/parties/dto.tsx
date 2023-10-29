import { MemberState } from '../google-spreadsheet-client/spreadhseet-types'
import { PoliticalGroupEnum } from '../political-groups/[acronym]/political-group-dto'

export interface Party {
  id: number,
  name: string,
  acronym: string,
  logoUrl: string,
  website: string,
  description: string,
  memberState: MemberState,
  politicalGroupAcronym: PoliticalGroupEnum
}
