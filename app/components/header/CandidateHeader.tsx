import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Row } from 'antd';
import { Fragment } from 'react';
import { Candidate } from '../../candidates/dto';
import SocialSharing from '../social/SocialSharing';

interface CandidateHeaderProps {
  candidate: Candidate
  subtitle: string;
}

export default function CandidateHeader({ candidate }: CandidateHeaderProps) {
  const { bio, shortName, fullName, photoUrl } = candidate;
  const hasManifesto = false;
  return (
    <section className='party-header'>
      <Row>
        <Col span={24}>
          <h1 className='party-header-title'>{fullName}</h1>
          {shortName && (
            <Fragment>
              <Divider />
              <p className='party-header-subtitle'>{shortName}</p>
            </Fragment>
          )}
        </Col>
      </Row>
      <Row typeof='flex' justify='center'>
        <Col>
          <Avatar size={200} src={photoUrl.toString()} icon={<UserOutlined />} />
          {!bio && (
            <div className='party-header__program-cta'>
              <p>
                No bio.
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row
        typeof='flex'
        justify='end'
        align='middle'
        className='party-header__social'
      >
        <SocialSharing theme={'#c4c4c4'} />
      </Row>
    </section>
  );
};
