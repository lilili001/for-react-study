import React from 'react';
import {BrowserRouter,Route,Switch,browserHistory,Link} from 'react-router-dom';
import Layout from './pages/Layout';
import Todos from './pages/Todos';
export default class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/layout">Layout</Link></li>
                        <li><Link to="/todos">Todos</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/layout" component={Layout} />
                        <Route exact path="/todos" component={Todos} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}