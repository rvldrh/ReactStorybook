import { Card, CardProps } from './card';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export const Default: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => <Card {...args} />;

Default.args = {
  variant: 'elevation',
  classes: 'w-64', // width only, height will be set via style
  label: 'test',
};

export const WithText: StoryObj<CardProps> = (args: React.JSX.IntrinsicAttributes & CardProps) => (
  <Card {...args}>
    <div>
      <span>This is a longer text to test how the text wrapping works within the Card component. The text should wrap automatically when it exceeds the width of the card.</span>
    </div>
  </Card>
);

WithText.args = {
  ...Default.args,
  classes: 'w-64 text-xl bg-green-600',
};
