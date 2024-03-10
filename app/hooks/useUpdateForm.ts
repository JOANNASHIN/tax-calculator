import { calculatorFormState } from '@/stores/calculator';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

const useForm = () => {
  const [form, setForm] = useRecoilState(calculatorFormState);

  const updateForm = useCallback(
    (payload: { name: string; value: string }) => {
      setForm(prev => ({
        ...prev,
        [payload.name]: payload.value,
      }));
      console.log(payload, 'updateForm');
    },
    [setForm],
  );

  return {
    updateForm,
  };
};

export default useForm;
