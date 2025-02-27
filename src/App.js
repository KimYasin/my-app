//Used to implement React Components & also implement the application
import React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React1',
}

//This is a function component
const App = () => {

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text' />
    </div>
  );
}

export default App;
