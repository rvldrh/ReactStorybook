import React from 'react';

interface InputProps {
  type: 'rounded' | 'simple';
  size: 'small' | 'medium' | 'large';
}

const Input: React.FC<InputProps> = ({ type, size }) => {
  const baseStyles = `px-[var(--Spacingspace-6)] gap-[var(--Spacingspace-5)] border-0 opacity-0`;
  const sizeStyles = {
    small: 'w-[360px] h-[17px]',
    medium: 'w-[580px] h-[17px]',
    large: 'w-[800px] h-[17px]',
  };

  const typeStyles = {
    rounded: 'rounded-[var(--BorderRadiusradius-3)]', // Use Tailwind's rounded utility
    simple: 'rounded-none',
  };

  return <input className={`${baseStyles} ${sizeStyles[size]} ${typeStyles[type]}`} />;
};

export interface ModalProps {
  inputType: 'rounded' | 'simple';
  inputSize: 'small' | 'medium' | 'large';
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  onCloseClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  inputType,
  inputSize,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  onCloseClick,
}) => {
  const sizeStyles = {
    small: 'max-w-[360px] max-h-[230px]',
    medium: 'max-w-[580px] max-h-[230px]',
    large: 'max-w-[800px] max-h-[230px]',
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className={`flex flex-col p-6 bg-white rounded-xl border-0 border-black border-solid shadow-lg ${sizeStyles[inputSize]}`}>
        <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col mt-1.5 max-md:max-w-full">
            <div className="text-xl font-semibold text-black max-md:max-w-full break-words">
              {title}
            </div>
            <div className="mt-3.5 text-sm text-zinc-600 max-md:max-w-full break-words">
              {description}
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8a918719d64f0d751f45a10e4de747c0c2d28deffb6740ac38b40aefe52966?"
            className="shrink-0 w-4 aspect-square cursor-pointer"
            alt="Close Icon"
            onClick={onCloseClick}
          />
        </div>
        
        <input 
          type='text' 
          value=""
          className="shrink-0 mt-3 h-9 bg-purple-200 rounded-md border border-purple-500 border-dashed max-md:max-w-full flex items-center pl-4"
          readOnly
        />
        
        <div className="flex justify-end gap-2 mt-3 text-sm font-medium max-md:flex-wrap max-md:pl-5">
          <button
            className="justify-center px-3 py-2 whitespace-nowrap rounded-md border-2 border-solid text-blue-700 border-blue-700"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
          </button>
          <button
            className="justify-center px-3 py-2 text-white rounded-md bg-blue-700"
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </button>
        </div>

        <div className="">
          <Input type={inputType} size={inputSize} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
