import style from './Main.style';
import Link from 'next/link';

const MainContainer = () => {
  return (
    <Link href={'/calculator'}>
      <section css={style}>
        <h2 className="blind">메인페이지</h2>
      </section>
    </Link>
  );
};

export default MainContainer;
