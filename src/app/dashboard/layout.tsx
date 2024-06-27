'use client';

import { HighOrderComponent } from '@/types';

const Component = ({ children }: HighOrderComponent) => {
  return <>{children}</>;
};

export default Component;
