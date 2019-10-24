import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";

export const actions = {};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
