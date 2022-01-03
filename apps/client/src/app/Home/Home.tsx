import { FC, CSSProperties } from 'react';
import { Button, Carousel, Col, Row, Space, Anchor } from 'antd';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

import { getUser } from '../../util/authService';

import './Home.css';

const Home: FC = (): JSX.Element => {
  const user = getUser();

  const titleStyle: CSSProperties = {
    color: '#000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#e5e5e5',
    fontSize: '32px',
  };

  const bgStyle: CSSProperties = {
    backgroundColor: '#e5e5e5',
    width: '100%',
    padding: '16px',
  };

  const centerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <Carousel effect="fade" autoplay>
        <div id="welcome-slide">
          <Row justify="space-around" style={bgStyle}>
            <Col style={centerStyle} md={24} lg={14}>
              <Space style={centerStyle} direction="vertical">
                <h3 style={titleStyle}>Welcome to My Shop!</h3>
                <Anchor affix={false} showInkInFixed={false}>
                  <Anchor.Link
                    href="#products-section"
                    title={
                      <Button block type="primary" size="large">
                        Browse Products
                      </Button>
                    }
                  ></Anchor.Link>
                </Anchor>
              </Space>
            </Col>
            <Col span={10}>
              <img
                className="homepage-img"
                src="https://doodleipsum.com/700/abstract?i=80ac55adfd99147758c3dc6a9771fc40"
                alt="Welcome Img"
              />
            </Col>
          </Row>
        </div>
        {user ? null : (
          <div>
            <Row style={bgStyle}>
              <Col style={centerStyle} md={24} lg={14}>
                <Space style={centerStyle} direction="vertical">
                  <h3 style={titleStyle}>Login to learn more!</h3>
                  <Link to="/login">
                    {' '}
                    <Button block type="primary" size="large">
                      Login
                    </Button>{' '}
                  </Link>
                </Space>
              </Col>
              <Col span={10}>
                <img
                  className="homepage-img"
                  src="https://doodleipsum.com/700/outline?i=f3cbe7193809ac27eeb5dd92fcf5475a"
                  alt="Login Img"
                />
              </Col>
            </Row>
          </div>
        )}
      </Carousel>
      <Products />
    </>
  );
};

export default Home;
