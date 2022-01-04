import { FC, CSSProperties, useState, useEffect } from 'react';

import {
  EditOutlined,
  EyeOutlined,
  FileImageOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Space, Table, Tooltip } from 'antd';
import { useAdminProductsQuery } from '../../generated/graphql';
import {
  IOffsetPageInfo,
  IProduct,
  IQueryProduct,
} from '../../interfaces/interfaces';
import ViewProductModal from './ViewProductModal';
import AddProductModal from './CreateProductForm';
import EditProductModal from './EditProductModal';

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

const ManageProducts: FC = (): JSX.Element => {
  const { data, loading, refetch: refetchProducts } = useAdminProductsQuery();
  const [productsInfo, setProductsInfo] = useState<IProduct[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<IOffsetPageInfo>(
    defaultPaginationInfo
  );
  const [searchParams, setSearchParams] = useState<IQueryProduct>({
    isAvailable: true,
    offset: 0,
  });
  const [viewProductVisible, setViewProductVisible] = useState<string | null>();
  const [addProductVisible, setAddProductVisible] = useState<boolean>(false);
  const [editProductVisible, setEditProductVisible] = useState<string | null>();

  useEffect(() => {
    if (!data) {
      return;
    }

    const { nodes: products, pageInfo, totalCount } = data.products;
    setProductsInfo(products);
    setPaginationInfo({ ...paginationInfo, ...pageInfo, totalCount });
  }, [data]);

  useEffect(() => {
    refetchProducts(searchParams);
  }, [searchParams]);

  const productsColumns = [
    {
      title: 'Thumbnail',
      dataIndex: 'imageUrl',
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
      dataIndex: 'name',
      key: 'name',
      ellipsis: { showTitle: false },
    },
    {
      title: 'Product Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: { showTitle: false },
    },
    {
      title: 'Product Price (RM)',
      dataIndex: 'price',
      key: 'price',
      render: (txt: number) => txt.toFixed(2),
    },
    {
      title: 'Availability',
      dataIndex: 'isAvailable',
      key: 'isAvailable',
      render: (txt: boolean) => (txt ? 'Available' : 'Not Available'),
    },
    {
      title: 'Last Updated',
      dataIndex: 'updated',
      key: 'updated',
      render: (txt: any) =>
        new Date(txt).toLocaleString('en-MY', { hour12: true }),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_: any, record: IProduct) => (
        <>
          <Space size="large" direction={'horizontal'}>
            <Tooltip title="View">
              <Button
                size="small"
                type="link"
                icon={<EyeOutlined style={{ fontSize: '28px' }} />}
                onClick={() => setViewProductVisible(record.id)}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                size="small"
                type="link"
                icon={<EditOutlined style={{ fontSize: '28px' }} />}
                onClick={() => setEditProductVisible(record.id)}
              />
            </Tooltip>
          </Space>
          <ViewProductModal
            product={record}
            visible={viewProductVisible === record.id}
            onCancel={() => setViewProductVisible(null)}
          />

          <EditProductModal
            product={record}
            visible={editProductVisible === record.id}
            onCancel={() => setEditProductVisible(null)}
          />
        </>
      ),
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPaginationInfo({ currentPage: page });
    setSearchParams({ ...searchParams, offset: (page - 1) * pageSize });
  };

  const viewAddProductModal = () => {
    setAddProductVisible(true);
  };

  return (
    <>
      <h1>Manage Products</h1>
      <Button
        onClick={viewAddProductModal}
        type="primary"
        icon={<PlusCircleOutlined />}
      >
        Add New Product
      </Button>

      <AddProductModal
        visible={addProductVisible}
        onCancel={() => setAddProductVisible(false)}
      />

      <Table
        loading={loading}
        tableLayout={'fixed'}
        rowKey={(record: IProduct) => record.id}
        dataSource={productsInfo}
        columns={productsColumns}
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

export default ManageProducts;
