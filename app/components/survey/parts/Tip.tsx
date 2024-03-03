import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Tip = ({ children }: TProps) => {
  return <>{children}</>;
};

export default Tip;
