import React from 'react';
import ReactDOM from 'react-dom';
import {GifExpertApp} from './GifExpertApp';
import '../src/index.css'



ReactDOM.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
  document.getElementById('root')
);



// const numbers = [1,2,3,4,5,6];
// const result = numbers.map(number=>(number*2));
// console.log(result);