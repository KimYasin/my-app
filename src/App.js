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

//1st Component - Parent/root Component
const App = () => {

  return (
    <div>
      <h1>My Hacker Stories</h1>
      { /*1st child/leaf Component of App*/}
      <Search />

      <hr />
      { /*2nd child/leaf Component of App*/}
      <List />

      { /*Search and List are sibling components*/}
    </div >
  );
}

{/*Item is a child component of List*/ }
function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.url}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>{item.title}</span>
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

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App;
