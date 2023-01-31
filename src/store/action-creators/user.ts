import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import axios from "axios"

export const fetchUser = () => {
  return async function (dispatch: Dispatch<UserAction>) {
    try {
      dispatch({type: UserActionTypes.FETCH_USER})
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: res.data})
      }, 500)
    } catch (err) {
      dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'Произошла ошибка при загрузке пользователей.'})
    }
  }
}