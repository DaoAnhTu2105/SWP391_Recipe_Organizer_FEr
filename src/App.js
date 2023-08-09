import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRouters } from './routers'
import DefaultLayout from './components/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
