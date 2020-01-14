import * as React from 'react';
import moment from 'moment';
import { Alert, Typography, Divider, Icon } from 'antd';

const Addons = () => {
  const { Paragraph, Text } = Typography;
  return (
    <React.Fragment>
      <Paragraph>
        <Alert
          banner={true}
          type="success"
          message={
            <Paragraph>
              <Text code={true}>Moment</Text> is enabled. Your locale is{' '}
              <Text strong={true}>{moment.locale()}</Text>.
            </Paragraph>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Paragraph>
              <Icon type="exclamation-circle" />
              <Text>
                <code>antd</code> is enabled
              </Text>
            </Paragraph>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Paragraph>
              <Text>
                <code>react-router-dom</code> is enabled
              </Text>
            </Paragraph>
          }
        />
      </Paragraph>
    </React.Fragment>
  );
};

export default Addons;
