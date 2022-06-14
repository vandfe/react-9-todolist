import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos,status])

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    console.log('here')
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus} 
      />
      <TodoList 
        todos={filteredTodos} 
        setTodos={setTodos}
       />
    </div>
  );
}

export default App;
