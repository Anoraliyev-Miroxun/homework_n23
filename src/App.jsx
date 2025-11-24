import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addUser } from './store/reduser/adduser';
import { nanoid } from '@reduxjs/toolkit';
import { Card } from './components/Card';



function App() {
  const { users } = useSelector((state) => state.userReduser)
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handler = (data) => {
    dispatch(addUser({ ...data, id: nanoid() }))
    reset();
  }
  return (
    <>
      
      <form onSubmit={handleSubmit(handler)}>
        <input type="text" {...register("username")} />
        <button type='submit'>send</button>
      </form>
      {
      users.map((i)=><Card key={i.id} {...i} />)
      }
    </>
  )
}

export default App
