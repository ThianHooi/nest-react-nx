import { Col, Row, Skeleton } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProductQuery } from '../../generated/graphql';
import Products from '../Products/Products';

import './Product.css';

const Product: FC = (): JSX.Element => {
  const { productId } = useParams();

  const {
    data: singleProductData,
    error,
    loading,
  } = useProductQuery({
    variables: {
      productId: productId || '1',
    },
  });

  const centerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <section className="product-section">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Row justify="center">
            <Col style={centerStyle} xs={24} sm={24} md={24} lg={12}>
              <img
                src={singleProductData?.product?.imageUrl}
                alt="product"
                className="product-img"
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <h1 className="product-section__title">
                {singleProductData?.product?.name}
              </h1>
              <div className="product-section__price">
                <h3>RM {singleProductData?.product?.price?.toFixed(2)}</h3>
              </div>
            </Col>
          </Row>
          <div className="product-section__desc">
            <h3>Product Description</h3>
            <p>{singleProductData?.product?.description}</p>
          </div>
        </>
      )}
      <Products idExcluded={productId} />
    </section>
  );
};

export default Product;
