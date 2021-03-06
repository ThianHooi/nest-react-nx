import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from './CreateProductMutation';

import { message, Modal, Form, Input, Switch, InputNumber } from 'antd';
import { getUser } from '../../util/authService';
import { IProductInput } from '../../interfaces/interfaces';

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 20 },
    md: { span: 20 },
    lg: { span: 20 },
    xl: { span: 20 },
    xxl: { span: 16 },
  },
};

const AddProductModal: FC<{
  visible: boolean;
  onCancel: any;
}> = ({ visible, onCancel }): JSX.Element => {
  const user = getUser();
  const [addProductForm] = Form.useForm();
  const [postCreateProduct] = useMutation(CREATE_PRODUCT);

  const handleSubmit = async (formValues: IProductInput) => {
    try {
      const { data } = await postCreateProduct({
        variables: formValues,
      });

      const { product } = data;

      Modal.success({
        content: 'Success! Product added!',
        okText: 'OK',
      });
      addProductForm.resetFields();
    } catch (e: any) {
      message.error(e.message);
    }
  };

  return (
    <Modal
      visible={visible}
      centered
      title={'Add New Product'}
      okText="Create"
      cancelText={'Cancel'}
      onCancel={onCancel}
      onOk={() =>
        addProductForm
          .validateFields()
          .then((values) => {
            handleSubmit({ ...values, user: parseFloat(user.id) });
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
      }
    >
      <Form
        form={addProductForm}
        {...formLayout}
        name="addProductForm"
        layout="horizontal"
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[
            {
              required: true,
              message: 'Please fill in the product name.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Product Description"
          rules={[
            {
              required: true,
              message: 'Please fill in the description.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Product Price"
          rules={[
            {
              required: true,
              message: 'Please fill in the price.',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value === undefined || value === null || value === '') {
                  return Promise.resolve();
                }

                if (!isNaN(value) && value >= 1) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error(
                    'Invalid. The price has to be a number and greater than 0.'
                  )
                );
              },
            }),
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Product Image URL"
          rules={[
            {
              required: true,
              message: 'Please fill in the image URL.',
            },
            {
              type: 'url',
              message: 'Please fill in a valid URL',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="isAvailable"
          label="Product Availability"
          valuePropName="checked"
          initialValue={true}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
