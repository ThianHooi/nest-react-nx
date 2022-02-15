import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Col, message, Row, Skeleton } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProductQuery } from '../../generated/graphql';
import { ICartProduct } from '../../interfaces/interfaces';
import { useLocalStorage } from '../../util/localstorage';
import Products from '../Products/Products';

import './Product.css';

const Product: FC = (): JSX.Element => {
  const { productId } = useParams();
  const [cart, setCart] = useLocalStorage('cart', []);

  const {
    data: singleProductData,
    error,
    loading,
  } = useProductQuery({
    variables: {
      productId: productId || '1',
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [productId]);

  const centerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const addToCart = () => {
    const currentCart: ICartProduct[] = cart;

    const currentProductInCart = currentCart.find(
      (item: ICartProduct) => item.productId?.toString() === productId
    );

    if (!currentProductInCart) {
      setCart([
        ...cart,
        {
          product: singleProductData?.product,
          productId,
          quantity: 1,
          unitPrice: singleProductData?.product?.price,
        },
      ]);
    } else {
      currentProductInCart.quantity = currentProductInCart.quantity
        ? currentProductInCart.quantity + 1
        : 1;
      setCart([
        ...cart.filter(
          (i: ICartProduct) => i.productId?.toString() !== productId
        ),
        currentProductInCart,
      ]);
    }

    message.success(`${singleProductData?.product?.name} added to cart!`);
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
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={addToCart}
              >
                Add To Cart
              </Button>
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
