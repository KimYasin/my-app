//Used to implement React Components & also implement the application
import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Kim Yasin',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

//1st React Component
const App = () => {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />
      { /*Calling React Component*/}
      <List />
    </div >
  );
}

{/*2nd React Component*/ }
function List() {
  return (
    <ul>
      {list.map(function (num) {
        return (
          <li key={num.objectID}>
            <span>
              <a href={num.url}>{num.url}</a>
            </span>
            <span>{num.author}</span>
            <span>{num.num_comments}</span>
            <span>{num.points}</span>
            <span>{num.title}</span>
          </li>
        );
      })}

      {/*BEGIN ---- AVOID DOING THIS*/}
      {/*{list.map(function (item, index) {
          return (
            <li key={index}>
              call the list from here
            </li>
          );
        })}*/}
      {/*END --- AVOID DOING THIS*/}
    </ul>
  );
}

{/*3rd React Component*/ }
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App;
