import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Bottom = ({ children }: TProps) => {
  return <div className="survey-bottom">{children}</div>;
};

export default React.memo(Bottom);
