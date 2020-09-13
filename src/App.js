import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {withRouter, Switch, Route} from 'react-router-dom'
import Contant from './component/contant/Contact';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  let route =
      <Switch>
        <Route path='/'  component={Contant} />
      </Switch>
  return (
    <React.Fragment>
      {route}
    </React.Fragment>
  );
}

export default withRouter(App);
