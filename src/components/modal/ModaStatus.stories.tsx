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
    },
    tags: ['autodocs'],
  } as Meta;

  

  const Template: StoryFn<ModalStatusProps> = (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    
    
    return (
      <div className="modal-story-container">
    <ModalStatus {...args} 
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
    imageSrc: `${process.env.PUBLIC_URL}/image/success.png`, // Sesuaikan jalur gambar
  };

  export const Error = Template.bind({});
  Error.args = {
    isOpen: true,
    title: 'Modal Title',
    message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    imageSrc:  `${process.env.PUBLIC_URL}/image/Error.png`
  }

  export const Warning = Template.bind({});
  Warning.args = {
    isOpen: true,
    title: 'Modal Title',
    message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    imageSrc:  `${process.env.PUBLIC_URL}/image/Warning.png`
  }

  export const Question = Template.bind({});
  Question.args = {
    isOpen: true,
    title: 'Modal Title',
    message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    imageSrc:  `${process.env.PUBLIC_URL}/image/Question.png`
  }

  export const Danger = Template.bind({})
  Danger.args = {
    isOpen: true,
    title: 'Modal Title',
    message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    imageSrc:  `${process.env.PUBLIC_URL}/image/Danger.png`
  }

  export const WarningY = Template.bind({});
  WarningY.args = {
    isOpen: true,
    title: 'Modal Title',
    message: 'lorem ipsum dolor sit amet consecteur. Arci vei orci eget phareta etc.',
    imageSrc:  `${process.env.PUBLIC_URL}/image/Warning.png`
  }