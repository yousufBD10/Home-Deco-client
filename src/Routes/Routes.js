import { createBrowserRouter } from "react-router-dom";
import AddServices from "../components/AddServices/AddServices";
import Blog from "../components/Blog/Blog";
import BlogCard from "../components/Blog/BlogCard";
import BlogDetails from "../components/Blog/BlogDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import MyReview from "../components/MyReview/MyReview";
import Register from "../components/Register/Register";
import Reviews from "../components/Reviews/Reviews";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import ServicesPageDetails from "../components/ServicesPageDetails/ServicesPageDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,
errorElement: <ErrorPage></ErrorPage>,
children:[
{
    path:'/',
    element: <Home></Home>,
    loader: ()=> fetch('https://assignment-11-server-bice.vercel.app/service')
   
},
{
    path:'/services',
    element: <ServicesPage></ServicesPage>,
    loader: ()=> fetch('https://assignment-11-server-bice.vercel.app/services')
   
},

{
    path:'/services/:id',
    element: <Reviews></Reviews>,
    loader: ({params})=> fetch(`https://assignment-11-server-bice.vercel.app/services/${params.id}`)
   
},
{
    path:'/myreview/',
    element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>,

   
},
{
    path:'/update/:id',
    element: <UpdateReview></UpdateReview> ,
    loader: ({params})=> fetch(`https://assignment-11-server-bice.vercel.app/myreview/${params.id}`)

   
},


{
    path:'/blog',
    element: <Blog></Blog>,
    loader: ()=> fetch("https://assignment-11-server-bice.vercel.app/blog")
},

{
    path:'/blog/:id',
    element: <BlogDetails></BlogDetails>,
    loader: ({params})=> fetch(`https://assignment-11-server-bice.vercel.app/blog/${params.id}`)
   
},


{
    path:'/addservices',
    element: <AddServices></AddServices>,
},
{
    path:'/register',
    element: <Register></Register>,
},

{
    path:'/login',
    element: <Login></Login>

},
]
},

])