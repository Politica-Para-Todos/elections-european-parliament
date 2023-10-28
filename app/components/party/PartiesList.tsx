import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import { Party } from '../../parties/dto';

interface PartiesListProps {
  politicalGroupAcronym: string;
}

export default async function PartiesList({ politicalGroupAcronym }: PartiesListProps) {
  const parties = await getPartiesBy(politicalGroupAcronym);

  return (
    <section className='party-candidates'>
      <Row>
        <Col lg={17} span={24}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Title level={2}>Parties List</Title>
        </Col>
        <Col lg={24} span={24}>
          <Paragraph>
            Click on each image to access the party page.
          </Paragraph>
        </Col>
      </Row>
      <Row typeof='flex' className='party-candidates__list'>
        {parties.map((party, index) =>
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
              href={`/parties/${party.acronym.toLowerCase()}`}
              legacyBehavior={false}
            >
              <div className='party-candidate__content'>
                <Avatar
                  size={120}
                  icon={<UserOutlined />}
                />
                {party.name && (
                  <>
                    <Title
                      className='party-candidate__content-title'
                      level={3}
                    >
                      {party.name}
                    </Title>
                    {/* Flag - Member State */}
                  </>
                )}
              </div>
            </Link>
          </Col>
        )}
      </Row>
    </section >
  );
};

export async function getPartiesBy(acronym: string): Promise<Party[]> {
  return Promise.resolve([{
    id: 1,
    acronym: 'PT',
    name: 'Party Test',
    hasManifesto: false,
    logoUrl: '',
    website: ''
  }])
}
