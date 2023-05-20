import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import AddToy from '../Pages/AddToy/AddToy';
import AllToys from '../Pages/AllToys/AllToys';
import Blogs from '../Pages/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import MyToy from '../Pages/MyToy/MyToy';
import SignUp from '../Pages/SignUp/SignUp';
import ToyDetails from '../Pages/ToyDetails/ToyDetails';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'addToy',
        element: <AddToy></AddToy>,
      },
      {
        path: 'myToy',
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: 'allToy',
        element: <AllToys></AllToys>,
        loader: () =>
          fetch('https://toy-cars-server-omega.vercel.app/addAllToys'),
      },
      {
        path: 'updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-cars-server-omega.vercel.app/addToy/${params.id}`),
      },
      {
        path: 'toyDetails/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/addToy/${params.id}`)
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ],
  },
]);
export default router;
