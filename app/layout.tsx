import { Layout } from 'antd';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import '../app/styles/index.scss';
import LayoutFooter from './components/footer/BaseFooter';
import LayoutHeader from './components/header/LayoutHeader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tools for Democracy',
  description: 'European Elections',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <StyledComponentsRegistry> */}
        <Layout>
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </Layout>
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  )
}
