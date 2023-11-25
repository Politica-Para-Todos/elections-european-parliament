import { Avatar, Button, Col, Divider, Row } from 'antd';
import Link from 'next/link';
import { Fragment } from 'react';
import SocialSharing from '../social/SocialSharing';

interface PoliticalGroupHeaderProps {
  entity: any,
  subtitle: string
}

export default function PoliticalGroupHeader({ entity, subtitle }: PoliticalGroupHeaderProps) {
  const { acronym, name, hasManifesto, logoUrl, website } = entity;

  return (
    <section className='party-header'>
      <Row>
        <Col span={24}>
          <h1 className='party-header-title'>{name}</h1>
          {acronym && (
            <Fragment>
              <Divider />
              <p className='party-header-subtitle'>{subtitle}</p>
            </Fragment>
          )}
        </Col>
      </Row>
      <Row typeof='flex' justify='center'>
        <Col>
          <Avatar size={200} src={logoUrl} icon='user' />
          <div className='party-header__program-cta'>
            {hasManifesto && (
              <Button
                className='button--grey party-header__program-button'
                key={name}
              >
                <Link href={`/party/${acronym}/manifesto`} rel='noopener'>
                  {`Ver Programa ${acronym}`}
                </Link>
              </Button>
            )}
          </div>
          {!hasManifesto && (
            <div className='party-header__program-cta'>
              <p>
                Este partido ainda não apresentou programa eleitoral. <br />
                Para qualquer correção entra em contacto connosco via{' '}
                <a href='mailto:contacto@politicaparatodos.pt'>e-mail.</a>
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
        <a href={website} rel='noopener noreferrer' target='_blank'>
          {website}
        </a>
        <SocialSharing theme={'#c4c4c4'} />
      </Row>
    </section>
  );
};
