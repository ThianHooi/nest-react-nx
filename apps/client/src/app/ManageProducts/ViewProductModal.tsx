import { Descriptions, Modal } from 'antd';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/interfaces';

const labelStyle = {
  maxWidth: '110px',
  minWidth: '54px',
};

const contentStyle = {
  maxWidth: '110px',
  minWidth: '54px',
};

const ViewProductModal: FC<{
  product: IProduct;
  visible: boolean;
  onCancel: any;
}> = ({ product, visible, onCancel }): JSX.Element => {
  const { name, description, price, isAvailable, imageUrl, created, updated } = product;

  const productDetailsArr = [
    {
      label: 'Product Name',
      value: name,
    },
    {
      label: 'Product Price',
      value: 'RM ' + price.toFixed(2),
    },
    {
      label: 'Availability',
      value: isAvailable ? 'Available' : 'Not Available',
    },
    {
      label: 'Image URL',
      value: imageUrl,
    },
    {
      label: 'Created Date',
      value: new Date(created).toLocaleString('en-MY'),
    },
    {
      label: 'Last Updated Date',
      value: new Date(updated).toLocaleString('en-MY'),
    },
  ];

  return (
    <Modal
      title={name}
      okText="Close"
      cancelButtonProps={{ style: { display: 'none' } }}
      onOk={onCancel}
      onCancel={onCancel}
      width={1200}
      visible={visible}
    >
      <Descriptions bordered size={'small'} column={2}>
        {productDetailsArr.map((item) => (
          <Descriptions.Item
            labelStyle={labelStyle}
            contentStyle={contentStyle}
            label={<b>{item.label}</b>}
          >
            {item.value ? item.value : 'N/A'}
          </Descriptions.Item>
        ))}

        <Descriptions.Item
          labelStyle={labelStyle}
          contentStyle={contentStyle}
          label={<b>Product Description</b>}
          span={2}
        >
          {description}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ViewProductModal;
