import 'react-loading-skeleton/dist/skeleton.css';

import {
  lightTheme,
  ThemeProvider as InterestThemeProvider,
} from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';

import { TOAST_DURATION } from '@/lib/constants';

const ThemeManager: FC<PropsWithChildren> = ({ children }) => (
  <InterestThemeProvider theme={lightTheme}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          border: '1px solid',
          borderRadius: lightTheme.radii.m,
          color: lightTheme.colors.onSurface,
          background: lightTheme.colors.surface,
          borderColor: lightTheme.colors.onPrimaryContainer,
        },
        duration: TOAST_DURATION,
      }}
    />
    <SkeletonTheme baseColor="#99BBFF28" highlightColor="#99BBFF14">
      {children}
    </SkeletonTheme>
  </InterestThemeProvider>
);

export default ThemeManager;