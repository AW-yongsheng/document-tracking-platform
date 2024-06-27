import { utils } from '@/lib';
import enUs from './en_us';
import { Action } from '@/types';
import { Language } from '@/types/';

type InitialState = {
  mode: `en_us` | `ms_my`;
  update: (language: Language) => Promise<void>;
  translate: (text: keyof typeof enUs, mode?: `en_us` | `ms_my`) => string;
};

export const initialState: InitialState = {
  mode: `en_us`,
  update: async () => {},
  translate: () => {
    return ``;
  },
};

export default (state = initialState, action: Action) => {
  let { type } = action;
  const { value } = action;
  const isCurrentAndNewStateDifferent = Object.entries(value).some(
    ([key, value]) => {
      return (
        utils.stringify(state[key as keyof typeof initialState]) !==
        utils.stringify(value)
      );
    },
  );

  if (!isCurrentAndNewStateDifferent) {
    type = ``;
  }

  switch (type) {
    case `add`:
      return { ...state, ...value };
    default:
      return state;
  }
};
