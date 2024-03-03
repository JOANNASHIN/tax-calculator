import Layout from '@/components/layouts/layout/Layout';
import LastContainer from '@/containers/last/LastContainer';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <LastContainer />
    </Layout>
  );
};

export default Index;
