import { css } from '@emotion/react';

const style = css`
  width: 100%;
  height: 100%;
  padding-bottom: 20rem;
  background: url('/assets/images/content/main-image.png') no-repeat center center / auto 100%;

  @media (max-width: 600px) {
    background: url('/assets/images/content/mo-main-image.png') no-repeat 55% center / auto 100%;
  }

  figure {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default style;
