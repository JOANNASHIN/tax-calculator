import { color, common } from '@/styles/variants';
import { css } from '@emotion/react';

export const HeaderHeight = '6rem';

const style = css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${common.zIndex.floating};
  width: 100%;
  height: 5rem;
  background: ${color.white};
  border-top: 1px solid ${color.greyeee};
  box-shadow: 0 0rem 0.5rem 0.2rem rgb(0, 0, 0, 0.05);
  // box-shadow: ${common.boxShadow};

  .footer {
    &__wrapper {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      width: 100%;
      padding: 0 1.2rem;
      box-sizing: border-box;

      //todo safe-area
    }

    &__menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8rem;
      color: ${color.greyaaa};

      &.active {
        color: ${color.point};
      }

      &.notice {
        img {
          margin-top: -1rem;
          // transform: translate(0, -50%);
          height: 3rem;
        }
      }

      img {
        height: 2rem;
      }

      &__name {
        margin-top: 0.6rem;
        font-size: 1rem;
      }
    }
  }
`;

export default style;
