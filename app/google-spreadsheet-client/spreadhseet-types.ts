export const SpreadsheetField = {
  ACRONYM: 'ACRONYM',
  NAME: 'NAME',
  SHORT_NAME: 'SHORT_NAME',
  FULL_NAME: 'FULL_NAME'
} as const;
type SpreadhseetFieldObjectValues<T> = T[keyof T];
export type SpreadsheetField = SpreadhseetFieldObjectValues<typeof SpreadsheetField>

export const MemberState = {
  PORTUGAL: 'PORTUGAL'
} as const;
type MemberStateObjectValues<T> = T[keyof T];
export type MemberState = MemberStateObjectValues<typeof MemberState>
