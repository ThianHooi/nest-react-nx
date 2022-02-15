import { FC, CSSProperties, useState, useEffect } from 'react';

import { FileImageOutlined } from '@ant-design/icons';
import { Table, Tooltip } from 'antd';
import { useOrdersQuery } from '../../generated/graphql';
import {
  IOffsetPageInfo,
  IOrder,
  IQueryProduct,
} from '../../interfaces/interfaces';

const centerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const defaultPaginationInfo: IOffsetPageInfo = {
  hasNextPage: false,
  hasPreviousPage: false,
  totalCount: 0,
  currentPage: 1,
};

const ManageOrders: FC = (): JSX.Element => {
  const { data, loading, refetch: refetchOrders } = useOrdersQuery();
  const [ordersInfo, setOrdersInfo] = useState<IOrder[]>([]);

  const [paginationInfo, setPaginationInfo] = useState<IOffsetPageInfo>(
    defaultPaginationInfo
  );

  const [searchParams, setSearchParams] = useState<IQueryProduct>({
    isAvailable: true,
    offset: 0,
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const { nodes: orders, pageInfo, totalCount } = data.orders;
    setOrdersInfo(orders);
    setPaginationInfo({ ...paginationInfo, ...pageInfo, totalCount });
  }, [data]);

  useEffect(() => {
    refetchOrders(searchParams);
  }, [searchParams]);

  const orderColumns = [
    {
      title: 'Created Date',
      dataIndex: 'created',
      key: 'created',
      render: (txt: any) =>
        new Date(txt).toLocaleString('en-MY', { hour12: true }),
    },
    {
      title: 'Buyer',
      dataIndex: ['user', 'name'],
      key: 'username',
      render: (username: string, { user }: IOrder) => (
        <Tooltip placement="topLeft" title={user.email}>
          {username}
        </Tooltip>
      ),
    },
    {
      title: 'Total Item',
      dataIndex: 'orderProducts',
      key: 'orderProducts',
      render: (orderProducts: any) => orderProducts.length || 0,
    },
    {
      title: 'Total Price',
      dataIndex: 'price',
      key: 'totalPrice',
      render: (txt: number) => txt.toFixed(2),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1),
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPaginationInfo({ currentPage: page });
    setSearchParams({ ...searchParams, offset: (page - 1) * pageSize });
  };

  const expandedRowRender = ({ orderProducts }: IOrder) => {
    const orderProductsColumns = [
      {
        title: 'Thumbnail',
        dataIndex: ['productId', 'imageUrl'],
        key: 'imageUrl',
        render: (imgurl: string) => {
          return (
            <div style={centerStyle}>
              {imgurl ? (
                <img
                  style={{ maxHeight: 45, width: 'auto' }}
                  src={imgurl}
                  alt="Video Thumbnail"
                />
              ) : (
                <FileImageOutlined style={{ fontSize: '32px' }} />
              )}
            </div>
          );
        },
      },
      {
        title: 'Product',
        dataIndex: ['productId', 'name'],
        key: 'product-name',
      },
      {
        title: 'Product Price',
        dataIndex: ['productId', 'price'],
        key: 'product-price',
        render: (txt: number) => txt.toFixed(2),
      },
      {
        title: 'Order Quantity',
        dataIndex: 'quantity',
        key: 'product-quantity',
      },
      {
        title: 'Order Price',
        dataIndex: 'totalPrice',
        key: 'product-totalPrice',
        render: (txt: number) => txt.toFixed(2),
      },
    ];

    return (
      <Table
        bordered
        columns={orderProductsColumns}
        dataSource={orderProducts}
        pagination={false}
      />
    );
  };

  return (
    <>
      <h1>Manage Orders</h1>
      <Table
        loading={loading}
        tableLayout={'fixed'}
        rowKey={(record: IOrder) => record.id}
        dataSource={ordersInfo}
        columns={orderColumns}
        pagination={{
          current: paginationInfo.currentPage,
          total: paginationInfo.totalCount,
          onChange: onPaginationChange,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        expandable={{ expandedRowRender }}
      />
    </>
  );
};

export default ManageOrders;
