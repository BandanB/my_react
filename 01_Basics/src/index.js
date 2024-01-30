import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Test from './Test';
//Imported Test.js file which I created and import it here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <App />
     <Test />
  </>
   
);
 
