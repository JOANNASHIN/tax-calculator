import CalculatorLayout from '@/components/layouts/layout/CalculatorLayout';
import CalculatorContainer from '@/containers/calculator/CalculatorContainer';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <CalculatorLayout>
      <CalculatorContainer />
    </CalculatorLayout>
  );
};

export default Index;
