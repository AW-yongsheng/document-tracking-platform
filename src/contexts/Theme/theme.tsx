'use client';

import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useContext,
} from 'react';
import reducer, { initialState } from './reducer';
import lightTheme from './light';
import darkTheme from './dark';
import { useIndexedDb } from '@/contexts';
import { CONSTANTS } from '@/commons';
import { HighOrderComponent, Theme } from '@/types';

const THEMES = { light: lightTheme, dark: darkTheme };

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storage = useIndexedDb();

  const fetch = useCallback(async () => {
    const themeJson = await storage.fetch({
      key: CONSTANTS.THEME,
    });

    return themeJson as Theme;
  }, [storage]);

  const update = async (theme: Theme) => {
    if (Object.keys(THEMES).includes(theme?.mode)) {
      await storage.store({ key: CONSTANTS.THEME, value: theme });
      dispatch({ type: `add`, value: theme });
    }
  };

  const initialize = useCallback(async () => {
    const theme: Theme = (await fetch()) || {
      mode: `dark` as `dark`,
    };

    if (Object.keys(theme).length === 0) {
      theme.mode = `dark`;
    }

    dispatch({ type: `add`, value: theme });
  }, [fetch]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Context.Provider
      value={{
        ...state,
        colors: THEMES[state.mode as keyof typeof THEMES],
        update,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  return useContext(Context);
};
