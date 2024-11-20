import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Body";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Body";
import Courseroute from "./Components/Courseroute/Courseroute";
<<<<<<< HEAD
import Footer from "./Components/Footer/Footer";
=======
import GalleryRoute from "./Components/GalleryRoute/GalleryRoute";
>>>>>>> 76cee386cebe34fbbd97d85522e4821bab054169

const Applayout  = ()=>{
  return(
    <>
      <Navbar/>
      <Body/>
      <Footer/>
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
    element:<Courseroute/>
  },
  {
    path:"/gallery",
    element:<GalleryRoute />
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
