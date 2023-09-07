import './App.css';
import React from 'react';
import Header from "./MyComponents/Header";     // DEFAULT EXPORT
import { Todos } from "./MyComponents/Todos";  // NAMED EXPORT
import { Footer } from "./MyComponents/Footer";
import { useEffect, useState } from 'react';
import AddToList from './MyComponents/AddToList';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Routes,
} from 'react-router-dom';
// APP FUNCITON
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // ACCESSING THE LOCAL STORAGE STORED ELEMENTS
  }
  // DELETE FUNCTION
  let onDelete = ((todoToRemove) => {
    console.log("I am onDelete of todo");
    let newTodos = todos.filter((todo) => { return todo !== todoToRemove });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos)); // LOCAL STORAGE
  });
  // ADD FUNCTION
  let addToList = ((title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const data = {
      "sno": sno,
      "title": title,
      "desc": desc,
    };
    setTodos([...todos, data]); // SPREAD OPERATOR TO UPDATE DATA
  });
  // TODO LIST
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // LOCAL STORAGE
  }, [todos]);
  // RETURNING MULTIPLE ELEMENTS
  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />
        <Routes>
          <Route exact path="/" element={
            <div>
              <AddToList addToList={addToList} />
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;



