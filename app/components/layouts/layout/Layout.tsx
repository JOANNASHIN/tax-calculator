import style from './Layout.style';
import { useEffect } from 'react';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';
import Modal from '@/components/modal/Modal';

const Layout = ({ children }: { children: React.ReactNode }) => {
  /**
   * rem 세팅
   */
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
    <div css={style}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
