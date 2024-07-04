import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ModalStatus, { ModalStatusProps } from './ModalStatus';
import { fn } from "@storybook/test";

export default {
  title: 'Tugas/ModalStatus',
  component: ModalStatus,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    message: { control: 'text' },
    title: { control: 'text', description: "Judul " },
    primaryButtonText: { control: 'text', defaultValue: 'Primary Action' },
    secondaryButtonText: { control: 'text', defaultValue: 'Secondary' },
    variant: {
      control: 'radio',
      options: ['success', 'error', 'warning', 'question', 'danger', 'warningY', 'trial' ],
      defaultValue: 'success',
      description: "Variant untuk pilihan status"
    },
  },
  tags: ['autodocs'],
} as Meta;

const variantSettings = {
  success: {
    imageSrc: `${process.env.PUBLIC_URL}/image/success.png`,
    bgColor: "bg-blue-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  error: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Error.png`,
    bgColor: "bg-red-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  warning: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
    bgColor: "bg-yellow-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  question: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Question.png`,
    bgColor: "bg-green-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  danger: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Danger.png`,
    bgColor: "bg-red-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  warningY: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
    bgColor: "bg-yellow-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
  trial: {
    imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
    bgColor: "bg-yellow-600",
    textBorderColor: "text-blue-600 border-blue-600",
  },
};

const Template: StoryFn<ModalStatusProps & { variant: keyof typeof variantSettings }> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const { variant, ...rest } = args;
  const variantProps = variantSettings[variant];

  return (
    <div className="modal-story-container">
      <ModalStatus
        {...rest}
        {...variantProps}
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
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'success',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const Error = Template.bind({});
Error.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'error',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const Warning = Template.bind({});
Warning.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'warning',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const Question = Template.bind({});
Question.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'question',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const Danger = Template.bind({});
Danger.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'danger',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Cancel',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const WarningY = Template.bind({});
WarningY.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'warningY',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Cancel',
  primaryAction: fn(),
  secondaryAction: fn(),
};

export const trial = Template.bind({});
trial.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'Lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  variant: 'warningY',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Cancel',
  primaryAction: fn(),
  secondaryAction: fn(),
};
