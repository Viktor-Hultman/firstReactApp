import React from 'react';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
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

const welcome = {
  greeting: 'Hey',
  title: 'FE20'
};

const myArray = ["I'm","an","array"];
const myNumbers = [1,4,8];

function getTitle(title) {
  return 'From Funtion ' + title;
};

//Function that takes an array
function writePTags(arr) {
  //Returns a new version of the array that targets each item
  return arr.map(function (x, index) {
    //Returns a p tag with a key of the "current" items index, and then places the current item in each p tag
    return (<p key={index}>{x}</p>);
  })
}

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" /> 

      <hr />

      {list.map(function(item) {
        return (
        <div key={item.objectID}>
          <span>
          <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      );
      })}
    </div>
  );
}

export default App;
