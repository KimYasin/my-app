import React from 'react';
//This is  global scope

//Allowed: const item => {....}
//Allowed(Recommended): const (item) => {...}
//Not Allowed: const item, index => {....}
//Allowed(Recommended): const (item, index) => {....}
//If the function's only purpose is to return a value and there is no business logic between, you can remove the curly "braces" and "return" of the function like App, Search and Link components
//Always pass functions to these handlers, not the return value of the function, except when the return 
//value is a function. Knowing this is crucial because it’s a well - known source for bugs in a React
//beginners application

let searcTerm = '';

const App = () => {
  const stories = [
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

  console.log('App renders');

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />

      <hr />

      <List list={stories} />

    </div >
  );
};

{ /*->List component function signature
    ->since stories is not used in the App component directly, but in one of its child components,
we passed it as "props" to the List component
    ->We could also define stories directly in the List component and would
   not need to use props in the first place; however, in the future we will make
use of the stories in the App component and thus will keep it there*/ }

{ /*Props are used to pass information down the component tree,
state is used to alter information over time*/}
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.url}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
    <span>{props.item.title}</span>
  </li>
);

const Search = () => {
  const [searcTerm, setSearchTerm] = React.useState('');
  //add function to handle change event in input field a.k.a event handler in React
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searcTerm}</strong>
      </p>
    </div>
  );
};


export default App;
