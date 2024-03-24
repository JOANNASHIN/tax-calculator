import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Box = ({ children }: TProps) => {
  return <div className="survey-box">{children}</div>;
};

export default React.memo(Box);
