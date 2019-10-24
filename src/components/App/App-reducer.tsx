import { RootAction } from "../../redux/root-actions";

const initialState = {};

export default (state = initialState, action: RootAction) => {
  switch (action) {
    default: {
      return { ...state };
    }
  }
};
