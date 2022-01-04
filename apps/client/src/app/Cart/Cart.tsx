import {
  EyeOutlined,
  MinusOutlined,
  PlusOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { Button, Card, Col, message, Modal, Result, Row, Tooltip } from 'antd';
import { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import { ICartProduct, IOrderProduct } from '../../interfaces/interfaces';
import { appendClientKey } from '../../util/appendImgClientKey';
import { getUser } from '../../util/authService';
import { useLocalStorage } from '../../util/localstorage';
import { ADD_ORDER } from './addOrderMutation';

const flexRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Cart: FC = (): JSX.Element => {
  const [cart, setCart] = useLocalStorage('cart', []);
  const [postCreateOrder] = useMutation(ADD_ORDER);
  const user = getUser();

  const removeFromCart = (productId: number) => {
    const currentCart: ICartProduct[] = cart;

    const currentProductInCart = currentCart.find(
      (item: ICartProduct) => item.productId === productId
    );

    if (!currentProductInCart) {
      return;
    } else {
      currentProductInCart.quantity = currentProductInCart.quantity
        ? currentProductInCart.quantity - 1
        : 1;

      if (currentProductInCart.quantity < 1) {
        setCart([
          ...cart.filter((i: ICartProduct) => i.productId !== productId),
        ]);
      } else {
        setCart([
          ...cart.filter((i: ICartProduct) => i.productId !== productId),
          currentProductInCart,
        ]);
      }
    }
  };

  const addToCart = (productId: number) => {
    const currentCart: ICartProduct[] = cart;

    const currentProductInCart = currentCart.find(
      (item: ICartProduct) => item.productId === productId
    );

    if (!currentProductInCart) {
      return;
    } else {
      currentProductInCart.quantity = currentProductInCart.quantity
        ? currentProductInCart.quantity + 1
        : 1;

      setCart([
        ...cart.filter((i: ICartProduct) => i.productId !== productId),
        currentProductInCart,
      ]);
    }
  };

  const checkout = async () => {
    try {
      const orderProducts: IOrderProduct = cart.map((item: ICartProduct) => {
        const { quantity, unitPrice, productId } = item;

        return {
          productId: parseFloat(productId.toString()),
          quantity,
          unitPrice,
        };
      });

      const { data } = await postCreateOrder({
        variables: {
          user: parseInt(user.id),
          input: orderProducts,
        },
      });

      Modal.success({
        content: 'Success! Order added!',
        okText: 'OK',
      });
      setCart([]);
    } catch (e: any) {
      message.error(e.message);
    }
  };

  return (
    <>
      <Row style={{ marginBottom: '32px' }} justify="space-between">
        <Col>
          <h1>My Cart</h1>
        </Col>
        <Col>
          <Button onClick={checkout} type="primary">
            Checkout
          </Button>
        </Col>
      </Row>
      {cart && cart.length ? null : (
        <Result
          icon={<SmileOutlined />}
          title="Your cart is empty!"
          extra={
            <Link to="/#products-section">
              <Button type="primary">Browse Products</Button>
            </Link>
          }
        />
      )}

      <Row gutter={[16, 16]}>
        {cart.map((item: ICartProduct) => {
          return (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={`product-col-${item.productId}`}
            >
              <Card
                key={`cart-product-${item.productId}`}
                title={item.product.name}
                size="default"
                actions={[
                  <Tooltip title={'View Product'}>
                    <Link
                      to={`/products/${item.productId}`}
                      key={`product-card-${item.productId}`}
                    >
                      <EyeOutlined key="view" />
                    </Link>
                  </Tooltip>,
                  <Tooltip title={'Remove from cart'}>
                    <MinusOutlined
                      onClick={() => removeFromCart(item.productId)}
                      key="removeFromCart"
                    />
                  </Tooltip>,
                  <Tooltip title={'Add to cart'}>
                    <PlusOutlined
                      onClick={() => addToCart(item.productId)}
                      key="addToCart"
                    />
                  </Tooltip>,
                ]}
              >
                <div>
                  <img
                    style={{
                      height: '300px',
                      objectFit: 'contain',
                    }}
                    loading="lazy"
                    width="100%"
                    height="auto"
                    alt="product"
                    src={appendClientKey(item.product.imageUrl)}
                  />
                  <div style={flexRow}>
                    <p>{`RM ${item.product.price?.toFixed(2)}`}</p>
                    <p>{`X ${item.quantity}`}</p>
                  </div>

                  <p
                    style={{
                      textAlign: 'right',
                    }}
                  >
                    <b>
                      Total: RM{' '}
                      {(item.product.price * item.quantity).toFixed(2)}
                    </b>
                  </p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Cart;
