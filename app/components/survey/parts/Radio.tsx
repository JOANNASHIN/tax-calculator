import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  value: string;
  children: string;
  onChange: (payload: any) => void;
};

const Radio = ({ children: Label, onChange, name: PropsName, value, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    onChange({
      name: PropsName,
      value: (e.target as HTMLInputElement)?.value,
    });
  };
  return (
    <label className="survey-checkbox">
      <input type="radio" name={PropsName} value={value} {...props} onChange={handleChange} />
      <span>{Label}</span>
    </label>
  );
};

export default React.memo(Radio);
