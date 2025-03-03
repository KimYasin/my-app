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

//When using arrow functions:
//Allowed: const item => {....}
//Allowed(Recommended): const (item) => {...}
//Not Allowed: const item, index => {....}
//Allowed(Recommended): const (item, index) => {....}
//If the function's only purpose is to return a value and there is no business logic between, you can remove the curly "braces" and "return" of the function like App, Search and Link components

//Parent/root Component - Definition of App component
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    { /*1st child/leaf Component of App*/}
    <Search />

    <hr />
    { /*2nd child/leaf Component of App*/}
    { /*This is the first instance of a List component*/}
    <List />
    { /*This is another instance of a List component*/}
    <List />

    { /*Search and List are sibling components*/}
  </div >
);

{/*Item is a child component of List*/ }
{ /*Definition of List component*/ }
const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.url}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>{item.title}</span>
      </li>
    ))}

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

{ /*Definition of Search component*/ }
const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
)

export default App;
