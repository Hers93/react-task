import { useContext } from 'react'
import { TaskContext } from '../context/taskContext'


function TaskCard( {task}) {
    const {deleteTask} = useContext(TaskContext)
   
    return (
        <div className='bg-gray-800 text-white p-4 rounded-md '>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm text-center'>{task.description}</p>
            {/* <p>{task.id}</p> */}
             <button className='bg-red-500 px2 py-1 rounded-md mt-4 w-40 hover:bg-red-400 ' onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        </div>
    )
}

export default TaskCard