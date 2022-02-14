import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from './CreateProductMutation';

import { message, Modal, Form, Input, Switch, InputNumber } from 'antd';
import { getUser } from '../../util/authService';
import { IProduct, IProductInput } from '../../interfaces/interfaces';
import { UPDATE_PRODUCT } from './UpdateProductMutation';

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

const EditProductModal: FC<{
  product: IProduct;
  visible: boolean;
  onCancel: any;
  onUpdated: any;
}> = ({ product, visible, onCancel, onUpdated }): JSX.Element => {
  const user = getUser();
  const [editProductForm] = Form.useForm();
  const [postUpdateProduct] = useMutation(UPDATE_PRODUCT);

  const handleSubmit = async (formValues: IProductInput) => {
    try {
      const { data } = await postUpdateProduct({
        variables: { ...formValues },
      });

      const { product } = data;

      Modal.success({
        content: 'Success! Product updated!',
        okText: 'OK',
      });

      onUpdated();
    } catch (e: any) {
      message.error(e.message);
    }
  };

  return (
    <Modal
      visible={visible}
      centered
      title={'Add New Product'}
      okText="Update"
      cancelText={'Cancel'}
      onCancel={onCancel}
      onOk={() =>
        editProductForm
          .validateFields()
          .then((values) => {
            handleSubmit({ ...values });
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
      }
    >
      <Form
        form={editProductForm}
        {...formLayout}
        name="addProductForm"
        layout="horizontal"
        initialValues={product}
      >
        <Form.Item name="id" label="Product ID" hidden>
          <Input />
        </Form.Item>

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

export default EditProductModal;
