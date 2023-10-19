import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import CheckIsLogin from './components/check-isLogin/check-isLogin.component';
import Template from './components/template/template.component';
import Registration from './pages/registration/registration.component';
import Login from './pages/login/login.component';
import Employee from './pages/employee/employee.component';
import Product from './pages/product/product.component';
import Sale from './pages/sale/sale.component';
import Order from './pages/order/order.component';
import Home from './pages/home/home.component';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <CheckIsLogin/>
  },
  {
    element: <Template/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/product',
        element: <Product/>
      },
      {
        path: '/importProduct',
        element: <Order/>
      },
      {
        path: '/employee',
        element: <Employee/>
      },
      {
        path: '/sale',
        element: <Sale/>
      }
    ]
  },
  {
    path: '/registration',
    element: <Registration/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  
);

