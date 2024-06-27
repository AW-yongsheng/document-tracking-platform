import { utils } from '@/lib';
import { Action, ModalError } from '@/types';

type InitialState = {
  isVisible: boolean;
  update: ({ isVisible, title, message }: ModalError) => Promise<void>;
} & ModalError;

export const initialState: InitialState = {
  isVisible: false,
  update: async () => {},
  title: ``,
  message: ``,
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
