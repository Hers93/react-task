import React from 'react'
import { useState,useContext } from 'react'
import {TaskContext} from '../context/taskContext'
/* import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; */

function TaskForm() {

  const [inputs, setInputs] = useState({})
 const { createTask } =  useContext(TaskContext)

  const handleChangueInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title: inputs.title,
      description: inputs.description
    }
    createTask(newTask)
    setInputs({})
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'> Crea tu tarea</h1>
        <input
          name='title'
          placeholder='Escribe tu tarea'
          value =  {inputs.title}
          onChange={handleChangueInput}
          className = 'bg-slate-300 p-3 w-full mb-2'
          autoFocus
        />
        <input
          name='description'
          placeholder='Descripcion de tu tarea'
          value =  {inputs.description} 
          onChange={handleChangueInput}
          className = 'bg-slate-300 p-3 w-full mb-2'
        />
        <button className = 'bg-indigo-500 px-3 py-1 w-full mb-2 text-white'>Guardar</button>

       {/*  <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack> */}

      </form>
    </div>
  )
}



export default TaskForm