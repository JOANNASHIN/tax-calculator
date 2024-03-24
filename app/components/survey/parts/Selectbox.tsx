import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  children: string;
  value: string;
  // checked: boolean;
  onChange: (payload: any) => void;
};

const Selectbox = ({ children: Label, onChange, name: PropsName, value, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    onChange({
      type: 'checkbox',
      name: PropsName,
      value: target.value,
      checked: target.checked,
    });
  };
  return (
    <select className="survey-checkbox">
      <option value="">0명</option>
    </select>
  );
};

export default React.memo(Selectbox);
