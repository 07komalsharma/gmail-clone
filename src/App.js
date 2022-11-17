import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Mail from './Mail';
import ErrorPage from './error-page';
import Root from './routes/root';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root />,
      errorElement: <ErrorPage />
    },
    {
      path: "/mail",
      element:<Mail />,
      errorElement: <ErrorPage/>
    }
  ])
  return (
    <div className="app">
      <div className='app_body'>
      <RouterProvider router={router} />
    </div>
   </div>
  );
}            
export default App;