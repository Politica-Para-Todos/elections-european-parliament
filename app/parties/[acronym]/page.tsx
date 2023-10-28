import Paragraph from 'antd/es/typography/Paragraph';
import PartyCandidatesList from '../../components/party/PartyCandidatesList';
import PartyHeader from '../../components/party/PartyHeader';
import PartyIntro from '../../components/party/PartyIntro';

interface PartyPageProp {
  params: {
    acronym: string
  }
}

export default async function PartyPage({ params }: PartyPageProp) {
  const { acronym } = params;
  const party = await getParty(acronym);
  const { description } = party;

  return (
    <>
      <PartyHeader party={party} subtitle='' />
      <PartyIntro title='Party description'>
        {!description ?
          <Paragraph>Description not available yet</Paragraph>
          :
          <Paragraph>{description}</Paragraph>
        }
      </PartyIntro>
      <PartyCandidatesList acronym={acronym} />
    </>
  )
}

export async function generateStaticParams(): Promise<string[]> {
  return await getAllPartiesAcronymsByMemberState();
}

async function getAllPartiesAcronymsByMemberState(): Promise<string[]> {
  return Promise.resolve(['party-1', 'party-2', 'party-3'])
}

async function getParty(acronym: string) {
  return Promise.resolve({
    id: 1,
    acronym: 'PPT',
    name: 'Partido Para Todos',
    hasManifesto: false,
    logoUrl: '',
    website: 'www.politicaparatodos.pt',
    description: 'about...'
  })
}
