export const SpreadsheetField = {
  ACRONYM: 'ACRONYM',
  NAME: 'NAME',
  SHORT_NAME: 'SHORT_NAME',
  FULL_NAME: 'FULL_NAME',
  LOGO_URL: 'LOGO_URL',
  POLITICAL_GROUP_ACRONYM: 'POLITICAL_GROUP_ACRONYM',
  WEBSITE: 'WEBSITE',
  DESCRIPTION: 'DESCRIPTION',
  MEMBER_STATE: 'MEMBER_STATE'
} as const;
type SpreadhseetFieldObjectValues<T> = T[keyof T];
export type SpreadsheetField = SpreadhseetFieldObjectValues<typeof SpreadsheetField>

export const MemberState = {
  AUSTRIA: 'AUSTRIA',
  BELGIUM: 'BELGIUM',
  BULGARIA: 'BULGARIA',
  CROATIA: 'CROATIA',
  CYPRUS: 'CYPRUS',
  CZECH_REPUBLIC: 'CZECH REPUBLIC',
  DENMARK: 'DENMARK',
  ESTONIA: 'ESTONIA',
  FINLAND: 'FINLAND',
  FRANCE: 'FRANCE',
  GERMANY: 'GERMANY',
  GREECE: 'GREECE',
  HUNGARY: 'HUNGARY',
  IRELAND: 'IRELAND',
  ITALY: 'ITALY',
  LATVIA: 'LATVIA',
  LITHUANIA: 'LITHUANIA',
  LUXEMBOURG: 'LUZEMBOURG',
  MALTA: 'MALTA',
  NETHERLANDS: 'NETHERLANDS',
  POLAND: 'POLAND',
  PORTUGAL: 'PORTUGAL',
  ROMANIA: 'ROMANIA',
  SLOVAKIA: 'SLOVAKIA',
  SLOVENIA: 'SLOVENIA',
  SPAIN: 'SPAIN',
  SWEDEN: 'SWEDEN'
} as const;
type MemberStateObjectValues<T> = T[keyof T];
export type MemberState = MemberStateObjectValues<typeof MemberState>
