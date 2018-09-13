import React, {Component} from 'react';
import Page from './containers/Page/Page'
import { Header }  from './components/Header/Header';
import Contacts  from './containers/Contacts/Contacts';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/" exact component={Header}/>
                    <Route path="/" exact component={Page}/>
                    <Route path="/contacts" exact component={Contacts}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
