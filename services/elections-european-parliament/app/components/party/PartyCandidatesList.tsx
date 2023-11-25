import { Col, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import { MemberState } from '../../google-spreadsheet-client/spreadhseet-types';
import CandidatesAvatars from '../candidate/CandidatesAvatars';

interface PartyCandidatesListProps {
  acronym: string;
}

export default async function PartyCandidatesList({ acronym }: PartyCandidatesListProps) {
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
        <CandidatesAvatars partyAcronym={acronym} memberState={MemberState.PORTUGAL} />
      </Row>
    </section >
  );
};
