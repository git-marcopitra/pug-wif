import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 25 22"
    fill="none"
    {...props}
  >
    <path
      d="M19.5716 0.164307H23.2547L15.2092 9.38318L24.6751 21.93H17.2643L11.4558 14.322L4.81696 21.93H1.13044L9.73518 12.0662L0.658691 0.166022H8.25817L13.5006 7.11877L19.5716 0.164307ZM18.2764 19.7205H20.3178L7.14312 2.25888H4.9542L18.2764 19.7205Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
