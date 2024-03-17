import { useState } from 'react';
type TProps = {
  maxStep: number;
};

const useFunnel = ({ maxStep }: TProps) => {
  const [step, setStep] = useState(1);

  const goPrevStep = () => {
    setStep(prev => {
      return prev < 2 ? 1 : prev - 1;
    });
  };

  const goNextStep = () => {
    setStep(prev => {
      return prev >= maxStep ? maxStep : prev + 1;
    });
  };

  return {
    step,
    goPrevStep,
    goNextStep,
  };
};

export default useFunnel;
