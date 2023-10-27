'use client';

import { Avatar } from 'antd';
import Link from 'next/link';
import { PoliticalGroup } from '../../political-group/[acronym]/political-group-dto';

// const Avatar = dynamic(import("antd/es/avatar"), { ssr: false });

interface RoundAvatarProp {
  politicalGroup: PoliticalGroup
}

export default function RoundAvatar({ politicalGroup }: RoundAvatarProp) {
  const { name, acronym, logoUrl } = politicalGroup;

  return (
    <Link className="avatar-list-item" href={`/political-group/${acronym.toLowerCase()}`}>
      <div className="avatar-list-item__content">
        <Avatar size={120} src={renderPartyLogo(logoUrl)} icon="user" />
        <h3 className="avatar-list-item__content-title">{acronym}</h3>
        <h4 className="avatar-list-item__content-subtitle">{name}</h4>
      </div>
    </Link>
  )
}

function renderPartyLogo(url: string) {
  return ''
}
