import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRouters } from './routers'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
