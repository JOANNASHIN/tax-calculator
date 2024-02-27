import type { AppProps } from 'next/app';
import '@/styles/global.scss';

const app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default app;
