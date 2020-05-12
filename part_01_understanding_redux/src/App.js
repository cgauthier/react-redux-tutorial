import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Part 01 - Understanding Redux</h1>
        <h2>
          Use your debugger console and test redux.
        </h2>
        <ol>
          <li>Check the store's state using <code>store.getState()</code> todolist should be empty.</li>
          <li>
            Add a subscript method that will console.log a message when we dispatch an action<br/>
            <code>store.subscribe(() => console.log('Added to the Redux Store!'));</code>
          </li>
          <li>
            Add the following entries using the store.dispatch() method with the addTodoitem action.<br/>
            <code>store.dispatch(addTodoitem({"{ title: 'Get Up', id: 1 }"})</code><br/>
            <code>store.dispatch(addTodoitem({"{ title: 'Survive', id: 2 }"})</code><br/>
            <code>store.dispatch(addTodoitem({"{ title: 'Go To Bed', id: 3 }"})</code>
          </li>
          <li>Check the store's state again using <code>store.getState()</code> and todolist should have 3 objects in its array.</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
