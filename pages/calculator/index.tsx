import Layout from '@/components/layouts/layout/Layout';
import CalculatorContainer from '@/containers/calculator/CalculatorContainer';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <CalculatorContainer />
    </Layout>
  );
};

export default Index;
