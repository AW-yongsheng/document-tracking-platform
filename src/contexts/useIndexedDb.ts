'use client';

// import { openDB } from 'idb';
import { useCallback, useMemo } from 'react';
import Dexie from 'dexie';
import { utils } from '@/lib';

const database = new Dexie(`wdp-db`);
database.version(1).stores({
  general: `key,value`,
});

const useIndexedDb = () => {
  const fetch = async ({ key }: { key: string }) => {
    return new Promise<object>(async (resolve, reject) => {
      try {
        let result = await database.table(`general`).get(key);

        if (!utils.isEmpty(result)) {
          result = utils.decryptData(result.value);
        }

        resolve(utils.isJson(result) ? JSON.parse(result) : {});
      } catch (error) {
        reject(false);
      }
    });
  };

  const store = useCallback(
    async ({ key, value }: { key: string; value: any }) => {
      return new Promise(async (resolve, reject) => {
        try {
          await database
            .table(`general`)
            .put({ key, value: utils.encryptData(JSON.stringify(value)) });
          resolve(true);
        } catch (error) {
          reject(false);
        }
      });
    },
    [],
  );

  const remove = async ({ key }: { key: string }) => {
    return new Promise(async (resolve, reject) => {
      try {
        await database.table(`general`).delete(key);
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });
  };

  const obj = useMemo(() => {
    return {
      fetch,
      store,
      remove,
    };
  }, [store]);

  return obj;
};

export default useIndexedDb;
