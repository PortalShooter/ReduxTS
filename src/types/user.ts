export interface UserState {
  users: any[];
  loading: boolean,
  error: null | string
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface UserAction {
  type: UserActionTypes;
  payload?: any
}