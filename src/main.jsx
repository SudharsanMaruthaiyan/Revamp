import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Body";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Body";
import Courseroute from "./Components/Courseroute/Courseroute";
import Footer from "./Components/Footer/Footer";
import GalleryRoute from "./Components/GalleryRoute/GalleryRoute";
import AboutRoute from "./Components/AboutRoute/AboutRoute";
import BlogDetails from "./Components/Blogroute/BlogDetails/BlogDetails";
import ContactRoute from "./Components/ContactRoute/ContactRoute";
import Blogroute from "./Components/Blogroute/Blogroute";
import FindCourseRoute from "./Components/Courseroute/FindCourse/FindCourseRoute";

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
    element:<FindCourseRoute></FindCourseRoute>
  },
  {
    path:"coursedetails",
    element:<Courseroute></Courseroute>
  },
  {
    path:"/gallery",
    element:<GalleryRoute />
  },
  {
    path:"/about",
    element:<AboutRoute />
  },
  {
    path:"/blog",
    element:<Blogroute></Blogroute>
  },
  {
    path:"/blogdetails",
    element:<BlogDetails></BlogDetails>
  },
  {
    path:"/contact",
    element:<ContactRoute></ContactRoute>
  }

  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
