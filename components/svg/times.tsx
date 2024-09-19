import { FC } from 'react';

import { SVGProps } from './svg.types';

const Times: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      d="M1.9998 0.821533L6.9998 5.82153L11.9998 0.821533L13.1783 2.00004L8.17831 7.00004L13.1783 12L11.9998 13.1786L6.9998 8.17856L1.9998 13.1786L0.821289 12L5.82129 7.00004L0.821289 2.00004L1.9998 0.821533Z"
      fill="currentColor"
    />
  </svg>
);

export default Times;
