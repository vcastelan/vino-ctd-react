import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import './App.css'

function App() {
 
  return (
    <div>
      <h1>My Todos</h1>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
      
    </div>
  )
}

export default App
