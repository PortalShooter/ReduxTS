import { TodoAction, TodoActionTypes, TodoState } from "../../types/todos"

const defaultUserState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  activePage: 1,
  limit: 10
}

export const todoReducer = (state: TodoState = defaultUserState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return {...state, loading: true}
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    case TodoActionTypes.FETCH_TODO_ERROR:
      return {...state, loading: false, error: 'Произошла ошибка при загрузке списка задач'}
    case TodoActionTypes.FETCH_TODO_CHANGE_PAGE:
      return {...state, activePage: action.payload}
    default:
      return state
  }
}