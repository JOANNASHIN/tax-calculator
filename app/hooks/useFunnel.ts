import { useState } from 'react';

const useFunnel = () => {
  const [step, setStep] = useState(1);

  const goPrevStep = () => {
    setStep(prev => {
      return prev < 2 ? 1 : prev - 1;
    });
  };
  const goNextStep = () => {
    setStep(prev => {
      return prev > 1 ? 2 : prev + 1;
    });
  };

  return {
    step,
    goPrevStep,
    goNextStep,
  };
};

export default useFunnel;
