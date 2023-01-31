export interface TodoState {
  todos: TodoItem[];
  loading: boolean,
  error: null | string,
  activePage: number,
  limit: number
}

export enum TodoActionTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  FETCH_TODO_CHANGE_PAGE = 'FETCH_TODO_CHANGE_PAGE',
}

interface TodoItem {
  id: number;
  title: string;
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO
}

interface FetchTodoActionSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: TodoItem[]
}

interface FetchTodoActionError {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string
}

interface FetchTodoActionChangePage {
  type: TodoActionTypes.FETCH_TODO_CHANGE_PAGE,
  payload: number
}

export type TodoAction = 
  FetchTodoAction
  | FetchTodoActionSuccess
  | FetchTodoActionError
  | FetchTodoActionChangePage