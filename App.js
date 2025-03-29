/**
 * How to create an 'Hello Prince' using react
 */
// const heading =  React.createElement('h1', {
//     id: 'heading'
// }, 'Hello Prince');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

/**
 * How to create nested elements as below
 *      <div id='parent'>
 *           <div id='child'>
 *              <h1>I am h1</h1>
 *            </div>
 *      </div>
 */

// const parent = React.createElement('div',{
//         id:'parent'
//     },
//     React.createElement('div', {
//         id:'child'
//     }, React.createElement('h1',{}, 'I am h1')))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

/**
 * How to create nested siblings elements as below
 *      <div id='parent'>
 *           <div id='child'>
 *              <h1>I am h1</h1>
 *              <h2>I am h2</h2>
 *            </div>
 *      </div>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div',{
    id:'parent'
},
React.createElement('div', {
    id:'child'
}, [React.createElement('h1',{}, 'I am h1'), React.createElement('h2',{}, 'I am h2')]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);