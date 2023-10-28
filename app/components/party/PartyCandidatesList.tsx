import { Avatar, Col, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';

// const { Option } = Select;

interface PartyCandidatesListProps {
  acronym: string;
}

export default async function PartyCandidatesList({ acronym }: PartyCandidatesListProps) {
  const candidates = await getCandidatesByParty(acronym);

  return (
    <section className='party-candidates'>
      <Row>
        <Col lg={17} span={24}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Title level={2}>Candidate's List</Title>
        </Col>
        <Col lg={24} span={24}>
          <Paragraph>
            Clica na imagem do cabeça de lista para acederes à lista completa de
            candidatos efetivos e suplentes desse círculo eleitoral.
          </Paragraph>
        </Col>
      </Row>
      <Row typeof='flex' className='party-candidates__list'>
        {candidates.map((candidate, index: number) =>
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
              href={`/party/${acronym}/candidates`}
              legacyBehavior={false}
            >
              <div className='party-candidate__content'>
                <Avatar
                  size={120}
                  src={`/party-candidates/${candidate.photoUrl}`}
                  icon='user'
                />
                {candidate.fullName && (
                  <Title
                    className='party-candidate__content-title'
                    level={3}
                  >
                    {candidate.fullName}
                  </Title>
                )}
              </div>
            </Link>
          </Col>
        )}
      </Row>
    </section >
  );
};

export async function getCandidatesByParty(acronym: string) {
  return Promise.resolve([{
    id: 1,
    listNumber: 1,
    shortName: 'Abel Coelho',
    fullName: 'Abel da Silva Coelho',
    photoUrl: ''
  },
  {
    id: 2,
    listNumber: 3,
    shortName: 'Amílcar Santos',
    fullName: 'Carlos Amílcar Antunes dos Santos',
    photoUrl: ''
  },
  {
    id: 3,
    listNumber: 5,
    shortName: 'Teresa Sousa',
    fullName: 'Teresa Ramiro Santos Sousa',
    photoUrl: ''
  }])
}
