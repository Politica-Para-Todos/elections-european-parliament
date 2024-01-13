export interface PoliticalGroup {
  id: number,
  acronym: string,
  name: string,
  logoUrl: string
}

export const PoliticalGroupEnum = [
  'EPP',
  'S&D',
  'Renew',
  'Greens-EFA',
  'ECR',
  'ID',
  'GUE-NGL',
  'N-I'
] as const;
type PoliticalGroupEnumObjectValues<T> = T[keyof T];
export type PoliticalGroupEnum = PoliticalGroupEnumObjectValues<typeof PoliticalGroupEnum>

export const PoliticalGroupEnumUrl = [
  'epp',
  's&d',
  'renew',
  'greens-efa',
  'ecr',
  'id',
  'gue-ngl',
  'n-i'
] as const;
type PoliticalGroupEnumUrlObjectValues<T> = T[keyof T];
export type PoliticalGroupEnumUrl = PoliticalGroupEnumUrlObjectValues<typeof PoliticalGroupEnumUrl>
