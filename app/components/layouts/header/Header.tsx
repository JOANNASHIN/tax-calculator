'use client';

import Link from 'next/link';
import style from './Header.style';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header className="layout-header">
      <div className="header-wrapper">
        {/* <h1 className="header-logo">
          <Link href="/">
            <span>상속계산기</span>
          </Link>
        </h1> */}
      </div>
    </header>
  );
};

export default Header;
