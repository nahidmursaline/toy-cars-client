import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../Pages/AddToy/AddToy";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToy from "../Pages/MyToy/MyToy";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'addToy',
          element: <AddToy></AddToy>
        },
        {
          path: 'myToy',
          element: <MyToy></MyToy>
        }
      ]
    },
  ]);
  export default router;