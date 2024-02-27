import { color, common } from '@/styles/variants';
import { css } from '@emotion/react';

export const HeaderHeight = '6rem';

const style = css`
  position: fixed;
  top: 0;
  left: 0;
  background: ${color.point};
  z-index: ${common.zIndex.floating};
  width: 100%;

  .header {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      max-width: 1280px;
      height: ${HeaderHeight};
      padding: 0 2rem;
      box-sizing: border-box;
    }

    &__logo {
      span {
        color: ${color.bg};
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: 0.1rem;
        text-shadow: 0.1rem 0.4rem 0.4rem rgb(0, 0, 0, 0.1);
      }
    }

    &__nav {
      position: absolute;
      top: 0;
      right: 0;

      &__menu {
        padding: 2rem;

        img {
          height: 2rem;
        }
      }
    }
  }
`;

export default style;
