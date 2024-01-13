import Image from 'next/image';
import header_logo from '../../../public/horizontal_logo.svg';

export default function HeaderLogo() {
  return (
    <Image
      src={header_logo.src}
      width='200'
      height='41'
      alt='PPT Header Logo'
      className='header_logo'
    />
  )
}
