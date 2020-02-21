import React, { Fragment } from 'react';
import path from 'path';
import moment from 'moment';
import Alert from '../molecules/Alert';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';
import Text from '../atoms/Text';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';
import AddOnItemLayout from '../organisms/AddOnItemLayout';
import StyledComponentText from './StyledComponentText';
import sclogo from '../../images/styled-components-logo.png';

const ListAddons = () => {
  const customValue = process.env.REACT_APP_CUSTOM_VALUE;
  return (
    <Fragment>
      <Paragraph>
        <Alert
          success={true}
          content={
            <Fragment>
              <Paragraph>
                <Icon name="accept" />
                <Icon name="info" />
                <Text success={true}>
                  <code>REACT_APP_CUSTOM_VALUE</code>
                </Text>{' '}
                loaded from{' '}
                <Text weight="bold" temporary={true}>
                  {path.join(__dirname, '.env')}
                </Text>{' '}
                and is set to
                {customValue ? (
                  <Text success={true}>customValue</Text>
                ) : (
                  <Text temporary={true}>'nothing yet'</Text>
                )}{' '}
                for environment in{' '}
                <Text temporary={true}>{process.env.NODE_ENV}</Text>
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
        <Divider important={true} />
        <Alert
          success={true}
          content={
            <Fragment>
              <Paragraph>
                <Icon name="accept" />
                <Icon name="files-code" />
                <Text success={true}>
                  <code>moment</code>
                </Text>{' '}
                is enabled. Your locale is{' '}
                <Text weight="bold">{moment.locale()}</Text>.
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
        <Divider important={true} />
        <Alert
          success={true}
          content={
            <Fragment>
              <Paragraph>
                <Icon name="accept" />
                <Icon name="exclamation-circle" />
                <Text>
                  <code>@fluentui/react</code> is enabled
                </Text>
              </Paragraph>
              <Paragraph>
                <Text>
                  More documentation on this is{' '}
                  <a href="https://microsoft.github.io/fluent-ui-react/">
                    here{' '}
                  </a>
                </Text>
              </Paragraph>
            </Fragment>
          }
        />
        <Divider important={true} />
        <Alert
          success={true}
          content={
            <Fragment>
              <Paragraph>
                <Icon name="accept" />
                <Icon name="exclamation-circle" />
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
        <Divider important={true} />
        <Alert
          success={true}
          content={
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
      </Paragraph>
      <AddOnItemLayout
        media={<Image src={sclogo} avatar={true} />}
        content={
          <React.Fragment>
            <Icon name="accept" />
            <Icon name="files-code" />
            <Paragraph>
              <code>styled-components{' '}</code>
              is enabled. Here is a <Button>styled button</Button>.
            </Paragraph>
            <Paragraph>
              More documentation on this is{' '}
              <a href="https://styled-components.com/docs">here </a>
            </Paragraph>
            <Paragraph>
              Following the principles of{' '}
              <a href="https://bradfrost.com/blog/post/atomic-web-design/">
                Atomic Design
              </a>
              , the <code>{'<Button>'}</code>
              has been placed in an <code>atoms</code>
              folder within the <code>components</code>
              folder
            </Paragraph>
          </React.Fragment>
        }
      />
    </Fragment>
  );
};

export default ListAddons;
