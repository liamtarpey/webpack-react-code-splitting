import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar.jsx';

// Loadables
import LoadComponent from './components/loadables/LoadableComponent.jsx';
const HomeComponent = LoadComponent('HomeComponent');
const AboutComponent = LoadComponent('AboutComponent');
const SettingsComponent = LoadComponent('SettingsComponent');

export const history = createBrowserHistory();
const App = (props) => {
    return (
        <div>
            {/* Example 1: Split by routes */}
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/" component={HomeComponent} exact />
                    <Route path="/about" component={AboutComponent} exact />
                    <Route path="/settings" component={SettingsComponent} exact />
                </Switch>
            </Router>

            {/* Example 2: Multi components per page */}
            {/*<Fragment>
                <HomeComponent />
                <AboutComponent />
                <SettingsComponent />
            </Fragment>*/}
        </div>
    );
};

export default App;
