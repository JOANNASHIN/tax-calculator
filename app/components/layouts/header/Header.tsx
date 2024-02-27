'use client';

import Link from 'next/link';
import style from './Header.style';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header css={style} className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">
          <Link href="/">
            <span>상속계산기</span>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
