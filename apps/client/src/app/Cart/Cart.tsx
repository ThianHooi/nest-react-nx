import { EyeOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Tooltip } from 'antd';
import { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import { ICartProduct } from '../../interfaces/interfaces';
import { appendClientKey } from '../../util/appendImgClientKey';
import { useLocalStorage } from '../../util/localstorage';

const flexRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Cart: FC = (): JSX.Element => {
  const [cart, setCart] = useLocalStorage('cart', []);

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

  // const checkout = () => {}

  return (
    <>
      <Row style={{ marginBottom: '32px' }} justify="space-between">
        <Col>
          <h1>My Cart</h1>
        </Col>
        <Col>
          <Button type="primary">Checkout</Button>
        </Col>
      </Row>

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
