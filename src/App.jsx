import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Routes/About";
import Home, { fetch } from "./Routes/Home";
import Root from "./Routes/Root";
import "./App.css"
import NewPost from "./Routes/NewPost";
import Post, { postLoader } from "./Routes/Post";

export default function App(){
  const router = createBrowserRouter([{
    path:'/',
    element: <Root />,
    children: [
      {
        path:'/',
        element:<Home />,
        loader: fetch
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/new',
        element:<NewPost />,
        
      },
      {
        path:'/post/:id',
        element:<Post/>,
        loader: postLoader
      }
    ]

  }])

  return (
    <RouterProvider router={router}/>
  
    )
}