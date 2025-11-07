import { InputHTMLAttributes, ReactNode } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  rightIcon?: ReactNode;
}

const InputField = ({ icon, rightIcon, ...props }: InputFieldProps) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
      <input
        className={`input-field ${icon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
        {...props}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default InputField;