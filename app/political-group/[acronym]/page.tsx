import { Layout } from 'antd';
import { PoliticalGroup } from '../../components/politicalGroup/politicalGroup';

interface PoliticalGroupProp {
  acronym: string
}

export default function PoliticalGroupPage({ acronym }: PoliticalGroupProp) {
  const politicalGroup = getPoliticalGroup(acronym);

  return (
    <Layout.Content>
      <div>{politicalGroup.name}</div>
    </Layout.Content>
  )
}

function getPoliticalGroup(acronym: string): PoliticalGroup {
  return {
    id: 1,
    acronym: 'PG',
    name: 'Political Group',
    logoUrl: ''
  }
}
