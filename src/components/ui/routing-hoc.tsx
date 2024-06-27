import { ReactNode, useLayoutEffect } from 'react';
import { CONFIG, CONSTANTS } from '@/commons';
import { useCookies, useRouter } from '@/contexts';
import { usePathname } from 'next/navigation';
import { initialState } from '@/contexts/User/reducer';

const Component = ({ children }: { children: ReactNode }) => {
  const storage = useCookies();
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const initialize = async () => {
      const user = (await storage.fetch({
        key: CONSTANTS.USER,
      })) as typeof initialState;

      // if (
      //   (
      //     CONFIG.ROUTES[user.type as keyof typeof CONFIG.ROUTES] || []
      //   ).findIndex((item) => {
      //     return item.href === pathname || item.subItems.includes(pathname);
      //   }) === -1
      // ) {
      //   return router.push(`/`);
      // }
    };

    initialize();
  }, [pathname, router, storage]);

  return children;
};

export { Component };
