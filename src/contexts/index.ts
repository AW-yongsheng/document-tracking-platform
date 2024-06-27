'use client';

import enUs from './Language/en_us';
import msMy from './Language/ms_my';
import useCookies from './useCookies';
import useIndexedDb from './useIndexedDb';
import useDebounce from './useDebounce';
import useDate from './useDate';
import useRouter from './useRouter';
import createContext from './createContext';
import { Provider as UserProvider, useUser } from './User/user';
import { Provider as ThemeProvider, useTheme } from './Theme/theme';
import { Provider as LanguageProvider, useLanguage } from './Language/language';
import {
  Provider as ModalErrorProvider,
  useModalError,
} from './ModalError/modal-error';
import { ContextProviders } from './ContextProviders';
import {
  Provider as NewClientAccountCreationProvider,
  useNewClientAccountCreation,
} from './NewClientAccountCreation/new-client-account-creation';

export {
  enUs,
  msMy,
  createContext,
  useCookies,
  useIndexedDb,
  useDebounce,
  useDate,
  useRouter,
  UserProvider,
  ThemeProvider,
  LanguageProvider,
  ModalErrorProvider,
  useUser,
  useTheme,
  useLanguage,
  useModalError,
  ContextProviders,
  NewClientAccountCreationProvider,
  useNewClientAccountCreation,
};
