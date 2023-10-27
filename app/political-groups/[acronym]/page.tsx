import { PoliticalGroup } from './political-group-dto';

interface PoliticalGroupProp {
  params: {
    acronym: string
  }
}

export default function PoliticalGroupPage({ params }: PoliticalGroupProp) {
  const { acronym } = params;

  return (
    <div>{acronym}</div>
  )
}

export async function generateStaticParams(): Promise<string[]> {
  return (await getAllPoliticalGroups()).map(pg => pg.acronym);
}

async function getAllPoliticalGroups(): Promise<PoliticalGroup[]> {
  return Promise.resolve([{
    id: 1,
    acronym: 'test-acronym',
    name: 'test-political-group',
    logoUrl: 'logoUrl'
  }])
}
