import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Question = ({ children }: TProps) => {
  console.log('ques');
  return <span className="survey-question">{children}</span>;
};

export default React.memo(Question);
