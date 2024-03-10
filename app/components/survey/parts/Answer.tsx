import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Answer = ({ children }: TProps) => {
  return <div className="survey-answer">{children}</div>;
};

export default React.memo(Answer);
