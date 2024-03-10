import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Tip = ({ children }: TProps) => {
  return <p className="survey-tip">{children}</p>;
};

export default React.memo(Tip);
