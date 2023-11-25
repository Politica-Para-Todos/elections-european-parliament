import Image from 'next/image';
import rows_people_image from '../../../public/rows-people.svg';

export default function AboutUsHeaderImage() {
  return (
    <Image
      src={rows_people_image.src}
      className='about-us__header-img'
      layout='responsive'
      width={1440}
      height={351}
      alt='people'
    />
  )
}
