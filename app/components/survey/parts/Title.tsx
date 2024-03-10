import React, { ReactNode } from 'react';

type TProps = {
  children: string;
};
const Title = ({ children }: TProps) => {
  return <h2 className="survey-title">{children}</h2>;
};

export default React.memo(Title);
