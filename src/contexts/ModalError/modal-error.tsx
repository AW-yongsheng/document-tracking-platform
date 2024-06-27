'use client';

import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';
import { HighOrderComponent, ModalError } from '@/types';

const Context = createContext(initialState);

export const Provider = ({ children }: HighOrderComponent) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const update = async (object: ModalError) => {
    dispatch({ type: `add`, value: object });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        update,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useModalError = () => {
  return useContext(Context);
};
