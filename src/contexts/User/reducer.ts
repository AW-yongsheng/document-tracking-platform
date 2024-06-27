import { utils } from '@/lib';
import { Action } from '@/types';

export type UserObject = {
  code?: string;
  name?: string | null;
  display_name?: string | null;
  type?: string | null;
  parent_code?: string;
  token?: string | null;
};

type InitialState = {
  update: (userData: UserObject) => void;
  reset: () => void;
} & UserObject;

export const initialState: InitialState = {
  code: ``,
  name: null,
  display_name: null,
  type: null,
  parent_code: ``,
  token: null,
  update: () => {},
  reset: () => {},
};

const def = (state = initialState, action: Action) => {
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
    case `update`:
      return { ...state, ...value };
    default:
      return state;
  }
};

export default def;
