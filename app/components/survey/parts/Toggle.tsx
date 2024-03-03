import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Toggle = ({ children }: TProps) => {
  return <>{children}</>;
};

export default Toggle;
