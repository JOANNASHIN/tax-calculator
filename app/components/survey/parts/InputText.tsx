import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  unit?: string;
  onChange: (payload: any) => void;
};

const InputText = ({ onChange, name: PropsName, unit, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    onChange({
      type: 'text',
      name: PropsName,
      value: target.value,
    });
  };
  return (
    <label className="survey-input-text">
      <input type="text" name={PropsName} onChange={handleChange} {...props} />
      {unit && <span>{unit}</span>}
    </label>
  );
};

export default React.memo(InputText);
