import { useState } from 'react'
import Todo from './components/Todo';
import "./App.css";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';



function App() {
  //Objeto das todos
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Header e Footer",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Liberar o Almoço",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React e Node",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  //useState da pesquisa, filtro e ordenação
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc")

  //função para adicionar tarefa
  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos);

  };

  //função para remover tarefa
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  //função para completar tarefa
  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }

//retorno da aplicação
  return (
    <div className="app">
      <h1>📝 Lista de Tarefas - Rolando</h1>
      
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      {/* inserindo a lógica para pesquisa, filtro e ordenação  */}
      <div className="todo-list">        
        {todos
          .filter((todo) =>
          filter === "All"
            ? true
            : filter === "Completed"
            ? todo.isCompleted
            : !todo.isCompleted
            )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b)=>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
            )
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo}
              completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />

    </div>

  )
}

export default App
