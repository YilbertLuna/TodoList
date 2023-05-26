import React from 'react';
import { Context } from './context/TodoContext';
import { Appui } from './AppUi';
import './style/App.css'

function App() {

  return(
    <Context>
      <Appui/>
    </Context>
  )
  
}

export default App;