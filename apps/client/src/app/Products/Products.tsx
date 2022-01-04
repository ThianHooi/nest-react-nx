import { FC, useEffect, useState } from 'react';
import {
  Skeleton,
  Card,
  Row,
  Col,
  Pagination,
  Tooltip,
  Dropdown,
  Button,
} from 'antd';
import {
  DownOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import { useProductsQuery } from '../../generated/graphql';
import { appendClientKey } from '../../util/appendImgClientKey';
import {
  IProduct,
  IOffsetPageInfo,
  IQueryProduct,
} from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import ProductFilter from './ProductsFilter';

const { Meta } = Card;

const defaultPaginationInfo: IOffsetPageInfo = {
  hasNextPage: false,
  hasPreviousPage: false,
  totalCount: 0,
  currentPage: 1,
};

const defaultSearchParam: IQueryProduct = {
  isAvailable: true,
  offset: 0,
};

const Products: FC<{ idExcluded?: string }> = ({ idExcluded }): JSX.Element => {
  const [searchParams, setSearchParams] = useState<IQueryProduct>({
    ...defaultSearchParam,
    ...(idExcluded && {
      excludeId: idExcluded,
    }),
  });

  const {
    data,
    loading,
    refetch: refetchProducts,
  } = useProductsQuery({
    variables: searchParams,
  });
  const [productsInfo, setProductsInfo] = useState<IProduct[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<IOffsetPageInfo>(
    defaultPaginationInfo
  );
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

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

  const onPaginationChange = (page: number, pageSize: number) => {
    setPaginationInfo({ currentPage: page });
    setSearchParams({ ...searchParams, offset: (page - 1) * pageSize });
  };

  const onApplyFilter = (val: any) => {
    const matchFilter = { ...val };
    if (val.price && val.price.length) {
      matchFilter.lowerPrice = val.price[0];
      matchFilter.upperPrice = val.price[1];
      delete matchFilter.price;
    }

    if (val.name && val.name.length) {
      matchFilter.name = `%${val.name}%`;
    }

    const filterObj: IQueryProduct = matchFilter;

    setSearchParams({ ...searchParams, ...filterObj });
    setFilterVisible(!filterVisible);
  };

  const onResetFilter = () => {
    setSearchParams({ ...defaultSearchParam });
    setFilterVisible(!filterVisible);
  };

  return (
    <div id="products-section" style={{ padding: '48px 0' }}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Dropdown
                overlay={
                  <ProductFilter
                    onApply={onApplyFilter}
                    onReset={onResetFilter}
                  />
                }
                trigger={['click']}
                onVisibleChange={() => setFilterVisible(!filterVisible)}
                visible={filterVisible}
              >
                <Button style={{ padding: 0 }} type="link">
                  Filters <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
            {productsInfo.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} key={`product-col-${item.id}`}>
                <Card
                  hoverable
                  key={`product-card-${item.id}`}
                  cover={
                    <img
                      style={{
                        height: '300px',
                        objectFit: 'contain',
                      }}
                      loading="lazy"
                      width="100%"
                      height="auto"
                      alt="product"
                      src={appendClientKey(item.imageUrl)}
                    />
                  }
                  actions={[
                    <Tooltip title={'View Product'}>
                      <Link
                        to={`/products/${item.id}`}
                        key={`product-card-${item.id}`}
                      >
                        <EyeOutlined key="view" />
                      </Link>
                    </Tooltip>,
                    <Tooltip title={'Add to Cart'}>
                      <ShoppingCartOutlined key="addToCart" />
                    </Tooltip>,
                  ]}
                >
                  <Meta
                    title={item.name}
                    description={`RM ${item.price.toFixed(2)}`}
                  />
                </Card>
              </Col>
            ))}
            <Col span={24}>
              <Pagination
                style={{ float: 'right' }}
                defaultPageSize={16}
                pageSize={16}
                defaultCurrent={1}
                current={paginationInfo.currentPage}
                total={paginationInfo.totalCount}
                onChange={onPaginationChange}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Products;
