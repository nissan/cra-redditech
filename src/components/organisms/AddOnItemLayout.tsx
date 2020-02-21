import { useBooleanKnob } from '@fluentui/docs-components';
import { ItemLayout, Image } from '@fluentui/react';
import React from 'react';

export interface IAddOnItemLayoutProps {
  media?: string|React.ReactNode;
  header?: string | React.ReactNode;
  headerMedia?: string;
  content: string | React.ReactNode;
  contentMedia?: string| React.ReactNode;
  endMedia?: string| React.ReactNode;
}

const AddOnItemLayout: React.FC<IAddOnItemLayoutProps> = (
  props: IAddOnItemLayoutProps
) => {
  const { media, header, headerMedia, content, contentMedia, endMedia } = props;
  const [debug] = useBooleanKnob({
    name: 'debug',
    initialValue: false,
  });
  return (
    <ItemLayout
      media={media}
      header={header}
      headerMedia={headerMedia}
      content={content}
      contentMedia={contentMedia}
      endMedia={endMedia}
      debug={debug}
    />
  );
};

export default AddOnItemLayout;
