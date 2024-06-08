import React from 'react';

export type ModalStatusProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title: string;
  imageSrc: string;
  bgColor: string;
  textBorderColor: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

const ModalStatus: React.FC<ModalStatusProps> = ({
  isOpen,
  onClose,
  message,
  title,
  imageSrc,
  bgColor,
  textBorderColor,
  primaryButtonText,
  secondaryButtonText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm max-w-[545px] max-md:px-5">
        <div className="flex gap-2 pr-1.5 max-md:flex-wrap">
          <div className="flex justify-center items-center p-1.5 w-20 h-20 bg-white">
            <img
              loading="lazy"
              src={imageSrc}
              className="aspect-square w-[68px]"
              alt="Modal Icon"
            />
          </div>
          <div className="flex flex-col pt-1 pr-1.5 pb-3.5 my-auto">
            <div className="text-xl font-semibold text-black">{title}</div>
            <div className="text-sm text-zinc-600">
              {message}
            </div>
          </div>
        </div>
        <div className="shrink-0 h-9 bg-purple-200 rounded-md border border-purple-500 border-dashed max-md:max-w-full" />
        <div className="flex justify-end gap-2 mt-5 text-sm font-medium max-md:flex-wrap max-md:pl-5">
          <button
            onClick={onClose}
            className={`px-3 py-2 whitespace-nowrap rounded-md border-2 ${textBorderColor} border-solid`}
          >
            {secondaryButtonText}
          </button>
          <button
            onClick={onClose}
            className={`px-3 py-2 text-white ${bgColor} rounded-md`}
          >
            {primaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalStatus;
