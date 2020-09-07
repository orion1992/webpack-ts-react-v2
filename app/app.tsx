/*
 * LOL
 */

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Main } from './containers/main';
import { Organizer } from './containers/organizer';

interface SomeItem {
    onClick: (name: string) => void
}

export const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/todo">Todo Application</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/" exact>
                        123
                    </Route>
                    <Route path="/about" component={Main} />
                    <Route path="/todo" component={Organizer} />
                </Switch>
            </div>
        </Router>
    );
};
