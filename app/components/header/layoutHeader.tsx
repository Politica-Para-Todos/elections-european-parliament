import { Col, Layout, Menu, Row } from "antd";
import Image from 'next/image';
import Link from "next/link";
import { Fragment } from "react";
import header_logo from '../../../public/horizontal_logo.svg';

export function LayoutHeader() {
  const showDrawer = () => true;
  const closeDrawer = () => true;

  return (
    <Fragment>
      <Layout.Header className='header'>
        <Row justify="space-between" align="middle" typeof="flex">
          <Col span={24} lg={24}>
            <Link href="/">
              <Image
                src={header_logo.src}
                width="200"
                height="41"
                alt="PPT Header Logo"
                className="header_logo"
              />
            </Link>

            {/* <Button
              className={
                "header__mobile-burger" +
                (true ? " header__mobile-burger--open" : "") //headerState.visible
              }
              type="primary"
              onClick={showDrawer}
            >
              <Image
                className="header__mobile-burger"
                src="/burger.svg"
                height={25}
                width={25}
                alt="burger menu"
              />
            </Button> */}

            <nav className="header__desktop-menu">
              <Menu mode="horizontal">
                <Menu.Item key={1}>
                  <Link href="/" onClick={closeDrawer}>
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key={2}>
                  <Link href="/member-state" style={{ scrollBehavior: "smooth" }} onClick={closeDrawer}>
                    Member States
                  </Link>
                </Menu.Item>
                <Menu.Item key={3}>
                  <Link href="/party" onClick={closeDrawer}>
                    Parties
                  </Link>
                </Menu.Item>
                <Menu.Item key={4}>
                  <Link href="/candidate" onClick={closeDrawer}>
                    Candidates
                  </Link>
                </Menu.Item>
                <Menu.Item key={5}>
                  <Link href="/about-us" onClick={closeDrawer}>
                    About us
                  </Link>
                </Menu.Item>
              </Menu>
              <a
                className="header-join-us"
                href={''} //LOOMIO_PPT_URL
                target="_blank"
                rel="noopener noreferrer"
              >Join us!
              </a>
              <div className="header-social-media">
                {/* <SocialSharing onlinePlatforms={socialMediaOptions} /> */}
              </div>
            </nav>
          </Col>
        </Row>
        {/* <Drawer
          className="header__mobile-menu"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          open={headerState.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <Menu mode="vertical">
            <Menu.Item>
              <Link href="/" onClick={closeDrawer}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/#parties-section" onClick={closeDrawer}>
                Partidos
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/debates-2022" onClick={closeDrawer}>
                Debates 2022
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about-us" onClick={closeDrawer}>
                Quem Somos
              </Link>
            </Menu.Item>
          </Menu>
          <a
            className="header-join-us"
            href={LOOMIO_PPT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >Junta-te a Nós!</a>
          <div className="header-social-media">
            <SocialSharing onlinePlatforms={socialMediaOptions} theme="#666" />
          </div>
        </Drawer> */}
      </Layout.Header>
    </Fragment >
  );
}
