import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

interface BaseIntroProp extends React.HTMLProps<HTMLDivElement> {
  title: string;
  children: any;
}

export default function LayoutIntro({ title, children }: BaseIntroProp) {
  return (
    <section className='party-intro'>
      <Row>
        <Col md={{ offset: 4, span: 16 }} lg={{ offset: 0, span: 16 }}>
          <Title level={2}>{title}</Title>
          <div className='party-intro__text'>
            {children}
          </div>
        </Col>
      </Row>
    </section>
  )
}
