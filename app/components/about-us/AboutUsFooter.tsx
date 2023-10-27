'use client';

import { Footer } from 'antd/es/layout/layout';
import Link from "next/link";
import { SOCIAL_OPTIONS } from '../../utils/social';
import SocialSharing from '../social/SocialSharing';
import FooterLogo from './FooterLogo';

export default function AboutUsFooter() {
  return (
    <Footer className='about-us-footer footer'>
      <SocialSharing onlinePlatforms={SOCIAL_OPTIONS} />
      <Link href="/">
        <FooterLogo />
      </Link>
    </Footer>
  )
}
