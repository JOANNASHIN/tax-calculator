import { atom } from 'recoil';

export const calculatorFormState = atom({
  key: 'calculatorFormState',
  default: {
    test1: 'Y',
    test2: 'Y',
  },
});
