import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const InputText = ({ children }: TProps) => {
  return <>{children}</>;
};

export default InputText;
