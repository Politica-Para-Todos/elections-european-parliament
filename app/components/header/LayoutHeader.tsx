import { Col, Menu, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Link from 'next/link';
import MenuItems from '../menu/MenuItems';
import SocialSharing from '../social/SocialSharing';
import HeaderLogo from './HeaderLogo';

export default function LayoutHeader() {
  return (
    <>
      <Header className='header'>
        <Row justify='space-between' align='middle' typeof='flex'>
          <Col span={24} lg={24}>
            <Link href='/'>
              <HeaderLogo />
            </Link>
            <nav className='header__desktop-menu'>
              <Menu mode='horizontal'>
                <MenuItems />
              </Menu>
              <a
                className='header-join-us'
                href={''} //LOOMIO_PPT_URL
                target='_blank'
                rel='noopener noreferrer'
              >Join us!
              </a>
              <div className='header-social-media'>
                <SocialSharing />
              </div>
            </nav>
          </Col>
        </Row>
      </Header>
    </>
  );
}
