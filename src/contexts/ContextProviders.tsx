'use client';

import {
  LanguageProvider,
  ModalErrorProvider,
  ThemeProvider,
  UserProvider,
  useModalError,
} from '@/contexts';
import { HighOrderComponent } from '@/types';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useMemo, useState } from 'react';

const ExtProviders = ({ children }: HighOrderComponent) => {
  const modalError = useModalError();

  const handleError = (error: any) => {
    modalError.update({
      isVisible: true,
      title: `${error.status}`,
      message: error.message,
    });
  };

  const [queryClient] = useState(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: handleError,
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
        mutations: {
          onError: handleError,
        },
      },
    });
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

const ContextProviders = ({ children }: HighOrderComponent) => {
  const value = useMemo(() => {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <UserProvider>
            <ModalErrorProvider>
              <ExtProviders>{children}</ExtProviders>
            </ModalErrorProvider>
          </UserProvider>
        </ThemeProvider>
      </LanguageProvider>
    );
  }, [children]);

  return value;
};

export { ContextProviders };
