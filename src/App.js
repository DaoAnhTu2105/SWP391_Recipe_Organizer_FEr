import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRouters } from './routers'
import DefaultLayout from './components/DefaultLayout'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP7wwbFT9wxZbr-JmKi3xhXbheyenmEGo",
  authDomain: "recipe-organizer-swp391.firebaseapp.com",
  projectId: "recipe-organizer-swp391",
  storageBucket: "recipe-organizer-swp391.appspot.com",
  messagingSenderId: "925656558059",
  appId: "1:925656558059:web:3d0fe95ae7fd5b650e11ae",
  measurementId: "G-GNPR3BQQ2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
