import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  unit?: string;
  onChange: (payload: any) => void;
};

const InputNumber = ({ onChange, name: PropsName, unit, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    onChange({
      type: 'number',
      name: PropsName,
      value: target.value,
    });
  };
  return (
    <label className="survey-input-number">
      <input type="tel" name={PropsName} onChange={handleChange} {...props} />
      {unit && <span>{unit}</span>}
    </label>
  );
};

export default React.memo(InputNumber);
