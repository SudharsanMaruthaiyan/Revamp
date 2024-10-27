import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Body";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Body";

const Applayout  = ()=>{
  return(
    <>
      <Navbar/>
      <Body/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>
  },
  {
    path:"/course",
    element:<Applayout/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
