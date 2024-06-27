'use client';

import { useLayoutEffect } from 'react';

const Component = () => {
  useLayoutEffect(() => {
    window.location.href = `/`;
  }, []);

  return null;
};

export default Component;
