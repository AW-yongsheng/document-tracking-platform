import { utils } from '@/lib';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { useCallback, useMemo } from 'react';

const useCookies = () => {
  const fetch = useCallback(async ({ key }: { key: string }) => {
    return new Promise<object>(async (resolve, reject) => {
      try {
        let result = (await getCookie(key)) as string;

        if (!utils.isEmpty(result)) {
          result = utils.decryptData(result);
        }

        resolve(utils.isJson(result) ? JSON.parse(result) : {});
      } catch (error) {
        reject(false);
      }
    });
  }, []);

  const store = useCallback(
    async ({ key, value }: { key: string; value: any }): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        try {
          setCookie(key, utils.encryptData(JSON.stringify(value)));
          resolve(true);
        } catch (error) {
          reject(false);
        }
      });
    },
    [],
  );

  const remove = useCallback(async ({ key }: { key: string }) => {
    return new Promise((resolve, reject) => {
      try {
        deleteCookie(key);
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });
  }, []);

  const obj = useMemo(() => {
    return {
      fetch,
      store,
      remove,
    };
  }, [fetch, store, remove]);

  return obj;
};

export default useCookies;
