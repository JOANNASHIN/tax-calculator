import { TForm, calculatorFormState } from '@/stores/calculator';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

const useForm = () => {
  const [form, setForm] = useRecoilState(calculatorFormState);

  const updateForm = useCallback(
    (payload: {
      name: keyof typeof form;
      value: (typeof form)[keyof typeof form];
      checked: boolean;
      type?: 'checkbox';
    }) => {
      setForm(prevForm => {
        let value = payload.value;
        console.log(value, 'update');

        //체크박스면 배열로 처리
        if (payload.type === 'checkbox') {
          const prevCheckboxValue = prevForm[payload.name] as string[];
          const checkboxValue = payload.value as string;

          if (payload.checked) {
            value = [...prevCheckboxValue, checkboxValue];
          } else {
            value = prevCheckboxValue.filter(v => v !== checkboxValue);
          }
        }

        //기타
        return {
          ...prevForm,
          [payload.name]: value,
        };
      });
    },
    [setForm],
  );

  const getForm = () => {
    return form;
  };

  return {
    getForm,
    updateForm,
  };
};

export default useForm;
