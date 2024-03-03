import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const Title = ({ children }: TProps) => {
  return <>{children}</>;
};

export default Title;
