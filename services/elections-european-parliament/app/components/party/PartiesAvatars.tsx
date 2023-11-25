import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import { Party } from '../../parties/dto';
import { convertMemberStateToUrl, convertPartyAcronymToUrl } from '../../utils/converter';

interface PartiesAvatarsProps {
  parties: Party[]
}

export default function PartiesAvatars({ parties }: PartiesAvatarsProps) {
  return (
    <>
      {parties.map((party, index) => {
        const { name, logoUrl, memberState } = party;
        const memberStateUrl = convertMemberStateToUrl(party.memberState);
        const acronymUrl = convertPartyAcronymToUrl(party.acronym);

        return (
          <Col
            key={index}
            span={12}
            sm={8}
            lg={6}
            xl={4}
            className='party-candidate'
          >
            <Link
              className='avatar-list-item'
              href={`/parties/${memberStateUrl}/${acronymUrl}`}
              legacyBehavior={false}
            >
              <div className='party-candidate__content'>
                <Avatar
                  size={120}
                  icon={<UserOutlined />}
                  shape='square'
                  src={logoUrl}
                />
                {name && (
                  <>
                    <Title
                      className='party-candidate__content-title'
                      level={3}
                    >
                      {`${name} - ${memberState}`}
                    </Title>
                  </>
                )}
              </div>
            </Link>
          </Col>
        )
      })}
    </>
  )
}
