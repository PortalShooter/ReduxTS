import { TodoActionTypes } from './../../types/todos';
import { Dispatch } from "redux"
import { TodoAction } from "../../types/todos"
import axios from "axios"

export const fetchTodo = (activePage = 1, limit = 10) => {
  return async function (dispatch: Dispatch<TodoAction>) {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODO})
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: activePage, _limit: limit}
      })
      setTimeout(() => {
        dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data})
      }, 500)
    } catch (err) {
      dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'Произошла ошибка при загрузке списка задач.'})
    }
  }
}

export const changeActivePage = (dispatch: Dispatch<TodoAction>, activePage: number) => {
  dispatch({type: TodoActionTypes.FETCH_TODO_CHANGE_PAGE, payload: activePage})
}