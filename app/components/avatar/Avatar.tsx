import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Link from 'next/link';
import { PoliticalGroup } from '../../political-groups/[acronym]/political-group-dto';

interface RoundAvatarProp {
  politicalGroup: PoliticalGroup
}

export default function RoundAvatar({ politicalGroup }: RoundAvatarProp) {
  const { name, acronym, logoUrl } = politicalGroup;

  return (
    <Link className="avatar-list-item" href={`/political-groups/${acronym.toLowerCase()}`}>
      <div className="avatar-list-item__content">
        <Avatar size={120} src={renderPartyLogo(logoUrl)} icon={<UserOutlined />} />
        <h3 className="avatar-list-item__content-title">{acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{name}</h4>
      </div>
    </Link>
  )
}

function renderPartyLogo(url: string) {
  return ''
}
