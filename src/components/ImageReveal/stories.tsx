import { Story, Meta } from '@storybook/react/types-6-0';
import ImageReveal from '.';

export default {
  title: 'ImageReveal',
  component: ImageReveal,
  // You can use as default for every component:
  // args: {
  //   title: 'Default title',
  //   description: 'Default description',
  // }
} as Meta;

export const Basic: Story = (args) => <ImageReveal {...args} />;
export const Default: Story = (args) => <ImageReveal {...args} />;

Default.args = {
  title: 'Default title',
};
