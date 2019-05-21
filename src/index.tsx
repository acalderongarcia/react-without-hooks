import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./utils/routes";
import t from './utils/localization/Localization';

setGlobal({
    currentLanguage: t.getLanguage()
  });

ReactDOM.render(<BrowserRouter><AppRoutes/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
