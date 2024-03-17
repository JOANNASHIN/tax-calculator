import { useEffect } from 'react';
import Header from '@/components/layouts/header/Header';

const CalculatorLayout = ({ children }: { children: React.ReactNode }) => {
  /** rem 세팅 */
  const settingRem = () => {
    const htmlDoc = document.documentElement;
    let enSizing = false;

    function setFontSize() {
      // pc버전 대응
      if (window.innerWidth > window.innerHeight) {
        htmlDoc.style.fontSize = '62.5%';
        return;
      }

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
    <div className="layout layout--calculator">
      <Header />
      <main className="layout-wrapper">{children}</main>
    </div>
  );
};

export default CalculatorLayout;
