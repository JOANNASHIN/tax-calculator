import React, { ChangeEvent } from 'react';

type TProps = {
  [key: string]: unknown;
  name: string;
  unit?: string;
  onChange: (payload: any) => void;
};

const InputPrice = ({ onChange, name: PropsName, unit, ...props }: TProps) => {
  const handleInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/[^\d]/g, '');
    target.value = value;
  };

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.replace(/,/g, '');

    console.log(value, Number(value).toLocaleString('ko-kr'));

    target.value = Number(value).toLocaleString('ko-kr');

    onChange({
      type: 'text',
      name: PropsName,
      value: target.value,
    });
  };
  return (
    <label className="survey-input-text">
      <input type="tel" name={PropsName} onInput={handleInput} onChange={handleChange} {...props} />
      {unit && <span>{unit}</span>}
    </label>
  );
};

export default React.memo(InputPrice);
