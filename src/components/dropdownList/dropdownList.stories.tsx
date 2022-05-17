import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownList from './dropDownList.components';

export default {
  title: 'UI components/Dropdown',
  component: DropdownList,
  argTypes: {},
} as ComponentMeta<typeof DropdownList>;

const Template: ComponentStory<typeof DropdownList> = (args) => <DropdownList {...args} />;

export const Default = Template.bind({});
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    starCount: 200,
    likeCount: 1300,
    messageCount: 4300,
  });
}

Default.args = {
 data: listData
}
