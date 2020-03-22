import React, { Fragment } from 'react';
import path from 'path';
import moment from 'moment';
import { Alert, Typography, Divider} from 'antd';
import ExclamationCircleOutlined from 'antd/lib/icon';
import Button from './ui-antd/atoms/Button';

const Addons = () => {
  const { Paragraph, Text } = Typography;
  const customValue = process.env.REACT_APP_CUSTOM_VALUE;
  return (
    <Fragment>
      <Paragraph>
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text code={true}>REACT_APP_CUSTOM_VALUE</Text> loaded from{' '}
                <Text code={true}>{path.join(__dirname, '.env')}</Text> and is
                set to
                <Text strong={true}> {customValue || 'nothing yet'}</Text> for
                environment in <Text strong={true}>{process.env.NODE_ENV}</Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://create-react-app.dev/docs/adding-custom-environment-variables/">
                    here{' '}
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text code={true}>moment</Text> is enabled. Your locale is{' '}
                <Text strong={true}>{moment.locale()}</Text>.
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://momentjs.com/">here </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <ExclamationCircleOutlined />
                <Text>
                  <code>antd</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://ant.design/docs/react/introduce">here </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text>
                  <code>react-router-dom</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://reacttraining.com/react-router/web/guides/quick-start">
                    here
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text>
                  <code>storybook</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation to{' '}
                  <a href="https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/">
                    Learn Storybook
                  </a>{' '}
                  as well as a good starter article on{' '}
                  <a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e">
                    Component-Driven Development
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider dashed={true} />
        <Alert
          banner={true}
          type="success"
          message={
            <Fragment>
              <Paragraph>
                <Text code={true}>styled-components</Text> is enabled. Here is a{' '}
                <Button>styled button</Button>.
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://styled-components.com/docs">here </a>
                </Text>
              </Paragraph>
              <Paragraph>
                Following the principles of{' '}
                <a href="https://bradfrost.com/blog/post/atomic-web-design/">
                  Atomic Design
                </a>
                , the <Text code={true}>{'<Button>'}</Text> has been placed in
                an <Text code={true}>ui-antd\atoms</Text> folder within the{' '}
                <Text code={true}>components</Text> folder
              </Paragraph>
            </Fragment>
          }
        />
      </Paragraph>
    </Fragment>
  );
};

export default Addons;
