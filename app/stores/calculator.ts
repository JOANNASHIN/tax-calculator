import { atom } from 'recoil';

type YN = 'Y' | 'N' | '';
export type TForm = {
  'step1-1': YN;
  'step1-2': number | null;
  'step1-3': number | null;
  'step2-1': YN;
  'step2-2': YN;
  'step2-3': YN;
  'step2-4': YN;
  'step2-5': string[];
  'step2-6': string[];
};

export const calculatorFormState = atom<TForm>({
  key: 'calculatorFormState',
  default: {
    'step1-1': '',
    'step1-2': 0,
    'step1-3': 0,
    'step2-1': '',
    'step2-2': '',
    'step2-3': '',
    'step2-4': '',
    'step2-5': [],
    'step2-6': [],
  },
});
