import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ModalStatus, { ModalStatusProps } from './ModalStatus';

export default {
  title: 'Tugas/ModalStatus',
  component: ModalStatus,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    message: { control: 'text' },
    title: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<ModalStatusProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <ModalStatus
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export const Success = Template.bind({});
Success.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/success.png`, // Sesuaikan jalur gambar
};
