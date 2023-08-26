import React from 'react';
import ReactDOM from 'react-dom/client';
//Adding bootstrap to our project, it's before index.css in case we want
// to overide the behaivor of bootstrap components in our index.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Here were are rendering App component and
// attach it to root element that is defined in our index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
