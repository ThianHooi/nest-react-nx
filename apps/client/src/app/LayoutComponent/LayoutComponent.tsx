import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from '../Home/Home';
import Products from '../Products/Products';

import { HomeOutlined, ShopOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const topNavItems = [
  {
    key: 'home',
    navLabel: 'Home',
    linkTo: '/',
    icon: <HomeOutlined />,
  },
  // {
  //   key: 'products',
  //   navLabel: 'Products',
  //   linkTo: '/products',
  //   icon: <ShopOutlined />,
  // },
];

const LayoutPage = (): JSX.Element => {
  const currentUrlPath = useLocation();

  const getCurrentActiveNav = () => {
    const currentNavItem = topNavItems.filter((item) => {
      return item.linkTo === currentUrlPath.pathname;
    });
    return [currentNavItem[0].key];
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={getCurrentActiveNav()}
        >
          {topNavItems.map((navItem) => {
            return (
              <Menu.Item key={navItem.key}>
                <Link to={`${navItem.linkTo}`}>
                  {navItem.icon}
                  <span>{navItem.navLabel}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content
        style={{
          padding: '50px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        LavaX Ordering System {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
