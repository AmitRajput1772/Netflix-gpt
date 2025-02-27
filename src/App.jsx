import { useState } from 'react'
import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";


function App() {

  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </BrowserRouter>
    
    
  )
}

export default App
