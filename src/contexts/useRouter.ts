'use client';

import { utils } from '@/lib';
import { useRouter as useNNRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const useRouter = () => {
  const router = useNNRouter();

  const push = useCallback(
    (route: string, params?: object) => {
      const urlParams = utils.convertObjectToUrlParameters(params || {});

      let routeAppend = route;

      if (!utils.isEmpty(urlParams)) {
        routeAppend = `${route}?${urlParams}`;
      }

      return router.push(routeAppend);
    },
    [router],
  );

  const replace = useCallback(
    (route: string, params?: object) => {
      const urlParams = utils.convertObjectToUrlParameters(params || {});

      let routeAppend = route;

      if (!utils.isEmpty(urlParams)) {
        routeAppend = `${route}?${urlParams}`;
      }

      return router.replace(routeAppend);
    },
    [router],
  );

  const reload = useCallback(() => {
    return window.location.reload();
  }, []);

  const open = (route: string, params?: object) => {
    const urlParams = utils.convertObjectToUrlParameters(params || {});

    let routeAppend = route;

    if (!utils.isEmpty(urlParams)) {
      routeAppend = `${route}?${urlParams}`;
    }

    return window.open(routeAppend, `_blank`);
  };

  const close = () => {
    window.open(`about:blank`, `_self`);

    return window.close();
  };

  const getQueryParam = useCallback((key: string) => {
    const param =
      new URLSearchParams(global.window?.location?.search).get(key) || ``;

    return param;
  }, []);

  const obj = useMemo(() => {
    return {
      push,
      open,
      replace,
      reload,
      close,
      getQueryParam,
    };
  }, [getQueryParam, push, reload, replace]);

  return obj;
};

export default useRouter;
