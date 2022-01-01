import { Button, Carousel, Col, Row, Space } from 'antd';
import { FC, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = (): JSX.Element => {
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

  const imgStyle: CSSProperties = {
    height: '600px',
    width: 'auto',
  };

  return (
    <Carousel effect="fade" autoplay>
      <div>
        <Row style={bgStyle}>
          <Col style={centerStyle} span={14}>
            <Space style={centerStyle} direction="vertical">
              <h3 style={titleStyle}>Welcome to My Shop!</h3>
              <Link to="/products">
                {' '}
                <Button type="primary" size="large">
                  Browse Products
                </Button>{' '}
              </Link>
            </Space>
          </Col>
          <Col span={10}>
            <img
              style={imgStyle}
              src="https://doodleipsum.com/700/abstract?i=80ac55adfd99147758c3dc6a9771fc40"
              alt="Welcome Img"
            />
          </Col>
        </Row>
      </div>
      <div>
        <Row style={bgStyle}>
          <Col style={centerStyle} span={14}>
            <Space style={centerStyle} direction="vertical">
              <h3 style={titleStyle}>Login to learn more!</h3>
              <Link to="/login">
                {' '}
                <Button type="primary" size="large">
                  Login
                </Button>{' '}
              </Link>
            </Space>
          </Col>
          <Col span={10}>
            <img
              style={imgStyle}
              src="https://doodleipsum.com/700/outline?i=f3cbe7193809ac27eeb5dd92fcf5475a"
              alt="Login Img"
            />
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default Home;
