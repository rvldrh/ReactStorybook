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
    
    primaryButtonText: {
      control: 'text',
      defaultValue: 'Primary Action',
    },
    
    secondaryButtonText: {
      control: 'text',
      defaultValue: 'Secondary',
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
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const RoundedMedium = Template.bind({});
RoundedMedium.args = {
  inputType: 'rounded',
  inputSize: 'medium',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const RoundedLarge = Template.bind({});
RoundedLarge.args = {
  inputType: 'rounded',
  inputSize: 'large',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const SimpleSmall = Template.bind({});
SimpleSmall.args = {
  inputType: 'simple',
  inputSize: 'small',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const SimpleMedium = Template.bind({});
SimpleMedium.args = {
  inputType: 'simple',
  inputSize: 'medium',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const SimpleLarge = Template.bind({});
SimpleLarge.args = {
  inputType: 'simple',
  inputSize: 'large',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
  primaryButtonText: 'Primary Action',
  secondaryButtonText: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};
