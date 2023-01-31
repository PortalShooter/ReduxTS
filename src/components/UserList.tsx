import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchUser } from '../store/action-creators/user';

const UserList: React.FC = () => {
  const {users, loading, error} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    fetchUser()(dispatch)
  }, []);

  if(loading) {
    return <div>Загрузка</div>
  }
  if(error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h2>Список пользователей</h2>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}

export default UserList