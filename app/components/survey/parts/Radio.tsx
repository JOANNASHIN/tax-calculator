import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  children: string;
  onChange: (payload: any) => void;
};

const Radio = ({ children: Label, onChange, name: PropsName, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    onChange({
      name: PropsName,
      value: (e.target as HTMLInputElement)?.value,
    });
  };
  return (
    <label className="radio">
      <input type="radio" name={PropsName} {...props} onChange={handleChange} />
      <span>{Label}</span>
    </label>
  );
};

export default React.memo(Radio);
