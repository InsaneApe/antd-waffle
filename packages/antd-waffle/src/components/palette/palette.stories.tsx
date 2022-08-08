import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Palette } from './index';

export default {
  title: 'UI components/Palette',
  component: Palette,
  argTypes: {},
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = (args) => <Palette {...args} />;

export const Default = Template.bind({});

Default.args = {}