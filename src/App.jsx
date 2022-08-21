import TaskList from './components/TaskList'
import TaksForm from './components/TaskForm'


function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaksForm />
        <TaskList />
      </div>

    </main>
  )
}

export default App