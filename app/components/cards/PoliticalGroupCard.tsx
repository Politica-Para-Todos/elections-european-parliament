import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';
import Image from 'next/image';
import Link from 'next/link';
import { PoliticalGroup } from '../../political-groups/[acronym]/political-group-dto';

interface PoliticalGroupCardProps {
  politicalGroup: PoliticalGroup
}

export default function PoliticalGroupCard({ politicalGroup }: PoliticalGroupCardProps) {
  const { name, acronym, logoUrl } = politicalGroup;
  const urlAcronym = acronym?.toLowerCase().replace('/', '-');

  return (
    <Link className="avatar-list-item" href={`/political-groups/${urlAcronym}`}>
      <div className="avatar-list-item__content">
        <Card
          hoverable
          style={{
            width: 200,
          }}
          cover={
            <Image
              src={logoUrl}
              width='100'
              height='50'
              alt={`${acronym} Political Group`}
            />
          }
        >
          <Meta title={acronym} description={name} />
        </Card>
      </div>
    </Link>
  )
}
