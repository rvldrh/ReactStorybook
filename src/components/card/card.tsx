import React, { FC, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'elevation' | 'outlined';
  backgroundColor: string;
  fontColor: string;
  classes?: string;
  label: string;
}

export const Card: FC<CardProps> = ({ label, fontColor = '#000', backgroundColor = '#fff', variant = 'elevation', children, classes, ...rest }) => {
  return (
    <div
      className={[
        classes,
        `rounded-xl p-2`,
        `${variant === 'elevation' ? 'shadow-md' : 'border-2 border-solid'}`,
      ].join(' ')}
      style={{
        backgroundColor,
        color: fontColor,
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        minHeight: '16rem', // Default initial height (equivalent to h-64 in Tailwind CSS)
      }}
      {...rest}
    >
      {children}
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{label}</pre>
    </div>
  );
};
