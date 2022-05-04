import React, {useState} from 'react';
import { TodoListItem } from './components/TodoListItem';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm'


const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false
  },
  {
    text: 'Mow the Lawn',
    complete: false
  },
  {
    text: 'Learn React',
    complete: false
  },
  {
    text: 'Practice Typescript',
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo }/>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
