import { useEffect } from 'react';
import Header from '@/components/layouts/header/Header';
import Modal from '@/components/modal/Modal';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  /** rem 세팅 */
  const settingRem = () => {
    const htmlDoc = document.documentElement;
    let enSizing = false;

    function setFontSize() {
      if (window.innerWidth > window.innerHeight) return;

      const remBaseFont = (htmlDoc.offsetWidth / 360) * 62.5; //10px 기준
      htmlDoc.style.fontSize = `${remBaseFont > 62.5 ? remBaseFont : 62.5}%`;
    }

    window.onresize = function () {
      if (!enSizing) {
        window.requestAnimationFrame(function () {
          setFontSize();
          enSizing = false;
        });
      }
      enSizing = true;
    };

    window.dispatchEvent(new Event('resize'));
  };

  useEffect(() => {
    settingRem();
  }, []);

  return (
    <div className="layout">
      {router.pathname !== '/' && <Header />}
      <main className="layout-wrapper">{children}</main>
    </div>
  );
};

export default Layout;
