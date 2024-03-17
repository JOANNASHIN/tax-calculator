import { atom } from 'recoil';

type YN = 'Y' | 'N' | '';
export type TForm = {
  'step1-1': YN;
  'step1-2': YN;
  'step2-1': YN;
  'step2-2': YN;
  'step2-3': string[];
};

export const calculatorFormState = atom<TForm>({
  key: 'calculatorFormState',
  default: {
    'step1-1': '',
    'step1-2': '',
    'step2-1': '',
    'step2-2': '',
    'step2-3': [],
  },
});
