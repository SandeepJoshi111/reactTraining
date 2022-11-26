import { Link, Outlet, Route, Routes } from "react-router-dom";
import Weather from "./Components/Weather";
import './App.css'

export default function App()
{
  return(
    <div className="App">
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/posts' element={<Post />}  />
        <Route path='/weather' element={<Weather />}  />

      </Route>

      <Route path='/weather' element={<Weather />} />
    </Routes>
    </div>
  );
}

function Home()
{
  return(
    <>
    <div>Header</div>
    <div>Sidebar</div>
    <Outlet />
    <div>Footer</div>
    </>
  );
}

function Post(){
  return(
    <div>My Posts</div>
  )
}