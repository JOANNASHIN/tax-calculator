import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  onClick: () => void;
  [key: string]: unknown;
};
const Button = ({ children: ButtonText, onClick, ...props }: TProps) => {
  return (
    <button className="survey-button" onClick={onClick} {...props}>
      {ButtonText}
    </button>
  );
};

export default React.memo(Button);
