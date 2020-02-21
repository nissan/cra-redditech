import React from 'react';
import Divider from '../atoms/Divider';
import Text from '../atoms/Text';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/Icon';
import Alert from '../molecules/Alert';
import Button from '../atoms/Button';

export const DefaultText: React.SFC = (props: unknown) => (
  <React.Fragment>
    <Divider important={true} />
    <Alert
      success={true}
      content={
        <React.Fragment>
          <Icon name="accept" />
          <Icon name="files-code" />
          <Paragraph>
            <Text>
              <code>styled-components</code>
            </Text>{' '}
            is enabled. Here is a <Button>styled button</Button>.
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
            , the{' '}
            <Text>
              <code>{'<Button>'}</code>
            </Text>{' '}
            has been placed in an{' '}
            <Text>
              <code>atoms</code>
            </Text>{' '}
            folder within the{' '}
            <Text>
              <code>components</code>
            </Text>{' '}
            folder
          </Paragraph>
        </React.Fragment>
      }
    />
  </React.Fragment>
);

export default DefaultText;
