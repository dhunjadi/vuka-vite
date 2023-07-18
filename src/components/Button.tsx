import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type: HTMLButtonElement['type'];
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({onClick, children, className = 'c-button', type = 'button', variant = 'primary', disabled}) => {
  return (
    <button
      className={`${className} ${variant === 'primary' ? 'c-button--primary' : 'c-button--secondary'} ${disabled && 'is-disabled'}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
