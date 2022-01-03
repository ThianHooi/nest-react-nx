import { CSSProperties, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Input, Button, Row, Col, Card, Spin, Modal } from 'antd';
import { UserOutlined, LoginOutlined, LockOutlined } from '@ant-design/icons';

import './Login.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from './loginMutation';
import { ILoginInput } from '../../interfaces/interfaces';
import { setUserSession } from '../../util/authService';

const Login: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [postLogin, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);

  const iconStyle: CSSProperties = {
    fontSize: '20px',
  };

  const handleSubmit = async (formValues: ILoginInput) => {
    try {
      const { data } = await postLogin({
        variables: { email: formValues.email, password: formValues.password },
      });

      const { login } = data;
      setUserSession(login.access_token, login.user);
      Modal.success({
        content: 'Welcome! You will be redirected to homepage.',
        okText: 'Go To Homepage',
        onOk: () => navigate('/', { replace: true }),
      });
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Row justify="space-around">
      <Col sm={24} md={10} lg={6}>
        {loading === false || !mutationLoading ? (
          <Card title={<h1>Login</h1>} bordered hoverable={false}>
            <Form name="login" className="login-form" onFinish={handleSubmit}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Enter your email',
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined style={iconStyle} />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Password is required',
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<LockOutlined style={iconStyle} />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                {mutationError && (
                  <p style={{ color: 'red' }}>
                    Error: {error}. Please try again!
                  </p>
                )}
                <br />
                <Button type="primary" htmlType="submit">
                  <LoginOutlined /> Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        ) : (
          <Card bordered hoverable={false}>
            <Spin size="large" tip="Loading..." spinning={loading} />
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default Login;
