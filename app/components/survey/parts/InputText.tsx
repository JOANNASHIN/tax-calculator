import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};
const InputText = ({ children, ...props }: TProps) => {
  return (
    <label>
      <input type="text" {...props} />
    </label>
  );
};

export default InputText;
