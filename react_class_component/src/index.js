import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginClassComponent } from './class_component/LoginCompo';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ClassState } from './class_component/ClassState';
import { ClassEvent } from './class_component/ClassEvent';
import { ClassApiDemo } from './class_component/LifeCycleMethod';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ClassApiDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
