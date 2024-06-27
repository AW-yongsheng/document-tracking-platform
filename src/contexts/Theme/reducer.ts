import { utils } from '@/lib';
import { Action, ThemeColors, Theme } from '@/types';

type InitialState = {
  mode: string;
  colors: ThemeColors;
  update: (theme: Theme) => Promise<void>;
};

export const initialState: InitialState = {
  mode: `dark`,
  colors: <ThemeColors>{},
  update: async () => {},
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
