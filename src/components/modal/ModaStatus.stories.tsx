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
    primaryButtonText: { control: 'text', defaultValue: 'Primary Action' },
    secondaryButtonText: { control: 'text', defaultValue: 'Secondary' },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModalStatusProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <div className="modal-story-container">
      <ModalStatus
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Success = Template.bind({});
Success.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/success.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
};

export const Error = Template.bind({});
Error.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Error.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
};

export const Question = Template.bind({});
Question.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Question.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Danger.png`,
  bgColor: "bg-red-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Cancel',
};

export const WarningY = Template.bind({});
WarningY.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
  bgColor: "bg-yellow-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Cancel',
};
