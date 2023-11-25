import { Content } from 'antd/es/layout/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tfd - About us',
  description: 'Generated by create next app',
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Content className='about-us-section'>
        {children}
      </Content>
    </>
  )
}
