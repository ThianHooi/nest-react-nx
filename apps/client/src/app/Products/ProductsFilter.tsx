import { CSSProperties, FC } from 'react';

import { Form, Input, Card, Slider, Button } from 'antd';
import 'antd/dist/antd.css';

const buttonStyle: CSSProperties = {
  marginRight: 8,
};

const ProductFilter: FC<{ onReset: any; onApply: any }> = ({
  onReset,
  onApply,
}): JSX.Element => {
  const [filterForm] = Form.useForm();

  const resetForm = () => {
    filterForm.resetFields();
    onReset();
  };

  const applyFilter = () => {
    filterForm
      .validateFields()
      .then((values) => {
        onApply({ ...values });
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Card style={{ width: '300px' }} bordered={true}>
      <Form layout={'horizontal'} form={filterForm}>
        <Form.Item name="name">
          <Input placeholder="Search by Product Name" />
        </Form.Item>

        <Form.Item name="price">
          <Slider range defaultValue={[20, 50]} />
        </Form.Item>

        <Form.Item style={{ float: 'right' }}>
          <Button type="primary" style={buttonStyle} onClick={resetForm}>
            Reset
          </Button>

          <Button
            style={buttonStyle}
            type="primary"
            htmlType="submit"
            onClick={applyFilter}
          >
            Apply
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProductFilter;
