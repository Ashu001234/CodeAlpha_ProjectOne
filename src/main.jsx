import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Layout from "./Layout.jsx"
import User  from "./components/User/User.jsx"
import Github from"./components/Github/Github.jsx"
 import Resume from './components/Resume/Resume.jsx'


const router=createBrowserRouter([

{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"",
      element: <Home/>
    },{
       path: "about",
       element :<About/>
    },
    {
      path: "contact",
      element :<Contact/>
   },
   {
    path: "user/:userid",
    element :<User/>
 }
 ,
   {
    path: "Github",
    element :<Github/>
 },
 {
  path: "Resume",
  element :<Resume/>
 }
  ]
 
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
