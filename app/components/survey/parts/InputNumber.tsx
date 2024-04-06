import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  unit?: string;
  onChange: (payload: any) => void;
  maxNumber?: number;
};

const InputNumber = ({ onChange, name: PropsName, unit, maxNumber, ...props }: TProps) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    target.value = maxNumber &&  Number(value) >= maxNumber ? maxNumber.toString() : value;

    onChange({
      type: 'number',
      name: PropsName,
      value: target.value,
    });
  };
  return (
    <label className="survey-input-number">
      <input type="tel" name={PropsName} {...props} onChange={handleChange} />
      {unit && <span>{unit}</span>}
    </label>
  );
};

export default React.memo(InputNumber);
