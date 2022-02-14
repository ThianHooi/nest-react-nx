import { DownOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SellerMenu = (
  <Menu>
    <Menu.Item>
      <Link to={`/products/manage`}>Manage Products</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={`/orders/manage`}>Orders</Link>
    </Menu.Item>
  </Menu>
);

export default SellerMenu;
