import style from './Main.style';
import Link from 'next/link';

const MainContainer = () => {
  return (
    <Link href={'/calculator'}>
      <div css={style}>
        <h2 className="blind">메인페이지</h2>
      </div>
    </Link>
  );
};

export default MainContainer;
