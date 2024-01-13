import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import React from 'react';
import SocialSharing from '../social/SocialSharing';
import FooterLogo from './FooterLogo';

export default function AboutUsFooter() {
  return (
    <Footer className='about-us-footer footer'>
      <SocialSharing />
      <Link href="/">
        <FooterLogo />
      </Link>
    </Footer>
  )
}
