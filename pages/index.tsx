import Layout from '@/components/layouts/layout/Layout';
import MainContainer from '@/containers/main/MainContainer';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <MainContainer />
    </Layout>
  );
};

export default Index;
