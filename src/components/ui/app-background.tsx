'use client';

import { useTheme } from '@/contexts';
import { ReactNode } from 'react';

type AppBackground = {
  children: ReactNode;
};

const Component = ({ children }: AppBackground) => {
  const theme = useTheme();

  return (
    <div
      className={`m-auto flex min-w-[48rem] max-w-[126rem] justify-end`}
      style={{
        background: theme.colors.background,
      }}
    >
      <>{children}</>
    </div>
  );
};

Component.displayName = `AppBackground`;

export { Component };
