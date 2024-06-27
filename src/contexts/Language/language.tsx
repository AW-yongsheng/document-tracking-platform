'use client';

import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useContext,
} from 'react';
import reducer, { initialState } from './reducer';
import { enUs, msMy, useIndexedDb } from '@/contexts';
import { CONSTANTS } from '@/commons';
import { HighOrderComponent, Language } from '@/types';

const LANGUAGES = { en_us: enUs, ms_my: msMy };

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storage = useIndexedDb();

  const fetch = useCallback(async () => {
    const themeJson = await storage.fetch({
      key: CONSTANTS.THEME,
    });

    return themeJson as Language;
  }, [storage]);

  const update = async (language: Language) => {
    if (Object.keys(LANGUAGES).includes(language?.mode)) {
      await storage.store({ key: CONSTANTS.LANGUAGE, value: language });
      dispatch({ type: `add`, value: language });
    }
  };

  const translate = (text: string, mode: keyof typeof LANGUAGES = `en_us`) => {
    const translation =
      LANGUAGES[mode || (state.mode as keyof typeof LANGUAGES)][
        text as keyof typeof enUs
      ];

    return translation ?? LANGUAGES.en_us[text as keyof typeof enUs] ?? text;
  };

  const initialize = useCallback(async () => {
    const language: Language = (await fetch()) || {
      mode: `en_us`,
    };

    if (Object.keys(language).length === 0) {
      language.mode = `en_us`;
    }

    dispatch({ type: `add`, value: language });
  }, [fetch]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Context.Provider
      value={{
        ...state,
        update,
        translate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useLanguage = () => {
  return useContext(Context);
};
