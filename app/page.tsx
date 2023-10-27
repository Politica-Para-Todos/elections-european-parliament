'use client';

import { Layout } from 'antd';
import LayoutFooter from './components/footer/BaseFooter';
import HomePoliticalGroups from './components/political-group/politicalGroup';

export default function HomePage() {
  return (
    <>
      <Layout.Content>
        <HomePoliticalGroups />
      </Layout.Content>
      <LayoutFooter />
    </>
  )
}

//"dev": "docker compose up -d && bunx prisma generate && bunx prisma migrate dev && next dev",
