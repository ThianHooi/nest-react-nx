import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Col, Dropdown, Layout, Menu, Row } from 'antd';
import Home from '../Home/Home';
import Products from '../Products/Products';

import { HomeOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Product from '../Product/Product';
import Login from '../Login/Login';

import { getUser } from '../../util/authService';
import SellerCenter from '../SellerCenter/SellerCenter';
import SellerMenu from './SellerMenu';
import ManageProducts from '../ManageProducts/ManageProducts';
import Cart from '../Cart/Cart';

const { Header, Content, Footer } = Layout;

const topNavItems = [
  {
    key: 'home',
    navLabel: 'Home',
    linkTo: '/',
    icon: <HomeOutlined />,
    requireAuth: false,
  },
  {
    key: 'login',
    navLabel: 'Login',
    linkTo: '/login',
    icon: <UserOutlined />,
    requireAuth: true,
  },
  {
    key: 'cart',
    navLabel: 'Cart',
    linkTo: '/cart',
    icon: <ShoppingCartOutlined />,
    requireAuth: false,
  },
];

const LayoutPage = (): JSX.Element => {
  const currentUrlPath = useLocation();
  const user = getUser();

  const getCurrentActiveNav = (): string[] | undefined => {
    const currentNavItem = topNavItems.filter((item) => {
      return item.linkTo === currentUrlPath.pathname;
    });

    if (!currentNavItem || !currentNavItem.length) {
      return undefined;
    }

    return [currentNavItem[0].key];
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Row>
          <Col span={20}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['home']}
              selectedKeys={getCurrentActiveNav()}
            >
              {topNavItems
                .filter(
                  (navItem) =>
                    // hide login nav if user is logged in
                    !navItem.requireAuth || (navItem.requireAuth && !user)
                )
                .map((navItem) => {
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
          </Col>

          <Col span={4}>
            {user && user.role === 'seller' ? (
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['seller-center']}
                selectedKeys={
                  currentUrlPath.pathname === '/seller'
                    ? ['seller-center']
                    : undefined
                }
              >
                <Dropdown overlay={SellerMenu}>
                  <Menu.Item
                    style={{
                      float: 'right',
                    }}
                    key="seller-center"
                  >
                    <SettingOutlined />
                    <span>Seller Center</span>
                  </Menu.Item>
                </Dropdown>
              </Menu>
            ) : null}

            {user && user.role === 'buyer' ? (
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={
                  currentUrlPath.pathname === '/profile'
                    ? ['buyer-center']
                    : undefined
                }
              >
                <Menu.Item
                  style={{
                    float: 'right',
                  }}
                  key="buyer-center"
                >
                  <Link to={`/seller`}>
                    <SettingOutlined />
                    <span>Profile</span>
                  </Link>
                </Menu.Item>
              </Menu>
            ) : null}
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: '50px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/seller" element={<SellerCenter />} />
          <Route path="/products/manage" element={<ManageProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        LavaX Ordering System {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
