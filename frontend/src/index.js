import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import TeamScreen from './screens/TeamScreen';
import UserScreen from './screens/UserScreen'
import UserEditScreen from './screens/UserEditScreen';
import TeamIdScreen from './screens/TeamIdScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route path="search/:keyword/page/:pageNumber" element={<HomeScreen />} />
      <Route path='/user/:id' element={<UserScreen />} /> 
      <Route path='/user/:id/edit' element={<UserEditScreen />} /> 
      <Route path='/team' element={<TeamScreen />} /> 
      <Route path='/team/:id' element={<TeamIdScreen />} /> 
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
