import { FC, CSSProperties, useState, useEffect } from 'react';

import {
  EditOutlined,
  EyeOutlined,
  FileImageOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Space, Table, Tooltip } from 'antd';
import { useOrdersQuery } from '../../generated/graphql';
import {
  IOffsetPageInfo,
  IOrder,
  IQueryProduct,
  IUser,
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
      title: 'Total Price',
      dataIndex: 'price',
      key: 'totalPrice',
    },
    {
      title: 'Total Item',
      dataIndex: 'orderProducts',
      key: 'orderProducts',
      render: (orderProducts: any) => orderProducts.length || 0,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPaginationInfo({ currentPage: page });
    setSearchParams({ ...searchParams, offset: (page - 1) * pageSize });
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
      />
    </>
  );
};

export default ManageOrders;
