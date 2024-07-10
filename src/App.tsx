import React from 'react'
import './App.css'
import HorizontalScroll from './components/HorizontalScroll'

function App() {
  return (
    <div className="App">
      <HorizontalScroll className="client-scroll-classname">
        <div style={{ width: 1000, height: 300 }} />
      </HorizontalScroll>
    </div>
  )
}

export default App
