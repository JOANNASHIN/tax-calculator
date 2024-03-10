import type { AppProps } from 'next/app';
import '@/styles/global.scss';
import { RecoilRoot } from 'recoil';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />{' '}
    </RecoilRoot>
  );
};

export default app;
