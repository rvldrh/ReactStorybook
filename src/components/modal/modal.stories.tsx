import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal, { ModalProps } from './modal';

export default {
  title: 'Tugas/Modal',
  component: Modal,
  argTypes: {
    inputType: {
      control: 'radio',
      options: ['rounded', 'simple'],
    },
    inputSize: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    title: {
      control: 'text',
      defaultValue: 'Modal Title',
    },
    description: {
      control: 'text',
      defaultValue: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    },
    inputText: {
      control: 'text',
      defaultValue: '',
    },
    primaryButtonText: {
      control: 'text',
      defaultValue: 'Primary Action',
    },
    primaryButtonColor: {
      control: 'color',
      defaultValue: '#1D4ED8',
    },
    secondaryButtonText: {
      control: 'text',
      defaultValue: 'Secondary',
    },
    secondaryButtonColor: {
      control: 'color',
      defaultValue: '#1D4ED8',
    },
    width: {
      control: {
        type: 'text',
        disable: true,
      },
      defaultValue: '580px',
    },
    height: {
      control: {
        type: 'text',
        disable: true,
      },
      defaultValue: 'auto',
    },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModalProps> = (args) => (
  <div className="modal-story-container">
    <Modal {...args} />
  </div>
);

export const RoundedSmall = Template.bind({});
RoundedSmall.args = {
  inputType: 'rounded',
  inputSize: 'small',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '360px',
  height: '230px',
};

export const RoundedMedium = Template.bind({});
RoundedMedium.args = {
  inputType: 'rounded',
  inputSize: 'medium',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '580px',
  height: '230px',
};

export const RoundedLarge = Template.bind({});
RoundedLarge.args = {
  inputType: 'rounded',
  inputSize: 'large',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '800px',
  height: '230px',
};

export const SimpleSmall = Template.bind({});
SimpleSmall.args = {
  inputType: 'simple',
  inputSize: 'small',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '360px',
  height: '230px',
};

export const SimpleMedium = Template.bind({});
SimpleMedium.args = {
  inputType: 'simple',
  inputSize: 'medium',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '580px',
  height: '230px',
};

export const SimpleLarge = Template.bind({});
SimpleLarge.args = {
  inputType: 'simple',
  inputSize: 'large',
  inputText: '',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  width: '800px',
  height: '230px',
};
