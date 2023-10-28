import Paragraph from 'antd/es/typography/Paragraph';
import ProfileHeader from '../../components/header/ProfileHeader';
import LayoutIntro from '../../components/intro/LayoutIntro';
import PartiesList from '../../components/party/PartiesList';

interface PoliticalGroupProp {
  params: {
    acronym: string
  }
}

export default function PoliticalGroupPage({ params }: PoliticalGroupProp) {
  const { acronym } = params;
  const politicalGroup = {
    name: acronym,
  }
  return (
    <>
      <ProfileHeader entity={politicalGroup} subtitle='' />
      <LayoutIntro title='louco'>
        <Paragraph>This is a Political Group</Paragraph>
      </LayoutIntro>
      < PartiesList politicalGroupAcronym={acronym} />
    </>
  )
}

export async function generateStaticParams(): Promise<string[]> {
  return await getAllPoliticalGroupsAcronyms();
}

async function getAllPoliticalGroupsAcronyms(): Promise<string[]> {
  return Promise.resolve([{
    id: 1,
    acronym: 'test-acronym',
    name: 'test-political-group',
    logoUrl: 'test-url'
  }].map(pg => pg.acronym))
}
