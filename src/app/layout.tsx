import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { ContextProviders } from '@/contexts';
import {
  Loading,
  ModalError,
  RoutingHoc,
  SideBar,
  AppBackground,
} from '@/components';

export const metadata: Metadata = {
  title: `Wealth Digital Platform`,
  description: `Wealth Digital Platform provided by Affin Bank`,
};

const Component = ({ children }: { children: ReactNode }) => {
  return (
    <RoutingHoc>
      <ContextProviders>
        <html lang='en' className={`no-scrollbar`}>
          <body>
            <AppBackground>
              <SideBar />
              <main
                className={`no-scrollbar h-[100vh] w-full overflow-y-scroll`}
              >
                {children}
              </main>
              <Loading />
              <ModalError />
            </AppBackground>
          </body>
        </html>
      </ContextProviders>
    </RoutingHoc>
  );
};

export default Component;
