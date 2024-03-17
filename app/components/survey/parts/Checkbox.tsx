import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  children: string;
  value: string;
  // checked: boolean;
  onChange: (payload: any) => void;
};

const Checkbox = ({ children: Label, onChange, name: PropsName, value, ...props }: TProps) => {
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
    <label className="survey-checkbox">
      <input type="checkbox" name={PropsName} onChange={handleChange} value={value} {...props} />
      <span>{Label}</span>
    </label>
  );
};

export default React.memo(Checkbox);
