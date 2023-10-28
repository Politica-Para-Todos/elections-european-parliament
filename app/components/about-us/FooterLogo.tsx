import Image from 'next/image';
import footer_logo from '../../../public/vertical_logo.jpg';

export default function FooterLogo() {
  return (
    <Image
      src={footer_logo.src}
      width={240}
      height={100}
      alt="PPT Footer Logo"
      className="footer_logo"
    />
  )
}
