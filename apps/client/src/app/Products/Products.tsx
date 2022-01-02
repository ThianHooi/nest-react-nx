import { FC, useEffect, useState } from 'react';
import { Skeleton, Card, Row, Col } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import { useProductsQuery } from '../../generated/graphql';
import { appendClientKey } from '../../util/appendImgClientKey';

const { Meta } = Card;
interface IProduct {
  __typename?: 'Product' | undefined;
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  created: any;
  updated: any;
  price: number;
  user: {
    __typename?: 'User' | undefined;
    id: string;
    name: string;
  };
}

const Products: FC = (): JSX.Element => {
  const { data, error, loading } = useProductsQuery({
    variables: { isAvailable: true },
  });
  const [productsInfo, setProductsInfo] = useState<IProduct[]>([]);

  useEffect(() => {
    if (!data) {
      return;
    }

    const { edges } = data.products;

    const products = edges.map((e) => e.node);
    setProductsInfo(products);
  }, [data]);

  return (
    <div id="products-section" style={{ padding: '48px 0' }}>
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={[16, 16]}>
          {productsInfo.map((item) => (
            <Col span={6} key={`product-col-${item.id}`}>
              <Card
                hoverable
                key={`product-card-${item.id}`}
                cover={
                  <img
                    style={{
                      height: '300px',
                      objectFit: 'contain',
                    }}
                    loading="lazy"
                    width="100%"
                    height="auto"
                    alt="product"
                    src={appendClientKey(item.imageUrl)}
                  />
                }
                actions={[
                  <EyeOutlined key="view" />,
                  <ShoppingCartOutlined key="addToCart" />,
                ]}
              >
                <Meta
                  title={item.name}
                  description={`RM ${item.price.toFixed(2)}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Products;
