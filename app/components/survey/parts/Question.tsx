import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Question = ({ children }: TProps) => {
  return <span style={{ fontWeight: 'bold' }}>{children}</span>;
};

export default Question;
