import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './home';

export default () => (
    <BrowserRouter>
        {/*way1 exact*/}
        {/*<div>*/}
            {/*<Route path="/" exact component={Home}></Route>*/}
            {/*<Route path="/home" exact component={Home}></Route>*/}
        {/*</div>*/}

        {/*way2:Switch */}
        <Switch>
            <Route path="/" render={props => <Home {...props}/>}></Route>
            <Route path="/home"   component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

 