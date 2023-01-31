import React, { useEffect } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { changeActivePage, fetchTodo } from '../store/action-creators/todo';
import { useAppSelector } from '../hooks/useAppSelector';

const TodoList = () => {
  const {error, loading, todos, limit, activePage} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()
  const pages = [1,2,3,4,5,6,7,8,9,10]
  
  useEffect(() => {
    fetchTodo(activePage)(dispatch)
  }, [activePage]);

  if(loading) {
    return <div>Загрузка</div>
  }
  if(error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h2>Список задач</h2>
      {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
      <div style={{display: 'flex'}}>
        {pages.map((page, index) => 
          <div 
            style={{border: activePage === page ? '2px solid red' : '1px solid  black', padding: '10px',  }}
            onClick={() => changeActivePage(dispatch, page)}
            key={index}
          >{page}</div>
        )}
      </div>
    </div>
  ) 
}

export default TodoList