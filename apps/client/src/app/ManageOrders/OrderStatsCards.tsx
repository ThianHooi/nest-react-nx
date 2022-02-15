import { FC, useState, useEffect } from 'react';

import { Row, Col, Card, Statistic } from 'antd';
import { useOrderAggregateQuery } from '../../generated/graphql';
import { IOrderAggregate } from '../../interfaces/interfaces';

const OrderStatsCards: FC = (): JSX.Element => {
  const { data, loading } = useOrderAggregateQuery();

  const [ordersStats, setOrdersStats] = useState<IOrderAggregate>();

  useEffect(() => {
    if (!data) {
      return;
    }

    setOrdersStats(data);
  }, [data]);

  return (
    <div style={{ marginBottom: '16px' }}>
      <Row gutter={12}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Total Orders"
              value={
                ordersStats?.orderAggregate.find((x) => x.count)?.count?.id || 0
              }
              precision={0}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Total Order Amount"
              value={
                ordersStats?.orderAggregate.find((x) => x.sum)?.sum?.price || 0
              }
              precision={2}
              prefix="MYR"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatsCards;
