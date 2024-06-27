'use client';

import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import reducer, { initialState } from './reducer';
import { useCookies } from '@/contexts';
import { HighOrderComponent } from '@/types';
import { CONSTANTS } from '@/commons';
import { utils } from '@/lib';

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const storage = useCookies();

  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    let user = await storage.fetch({ key: CONSTANTS.USER });

    if (utils.isEmpty(user)) {
      user = initialState;
    }

    dispatch({
      type: `update`,
      value: user,
    });
  }, [storage]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const update = useCallback(
    async (value: object) => {
      if (
        await storage.store({
          key: CONSTANTS.USER,
          value,
        })
      ) {
        initialize();
      }
    },
    [initialize, storage],
  );

  const reset = useCallback(async () => {
    if (await storage.remove({ key: CONSTANTS.USER })) {
      initialize();
    }
  }, [initialize, storage]);

  const value = useMemo(() => {
    return {
      ...state,
      update,
      reset,
    };
  }, [state, update, reset]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUser = () => {
  return useContext(Context);
};
