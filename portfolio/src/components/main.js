import React from 'react';
import { Switch, Route } from 'react-router-dom';

import landing from './landing';
import contact from './contact';
import about from './about';
import projects from './projects';
import resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/about" component={about} />
        <Route exact path="/projects" component={projects} />
        <Route exact path="/resume" component={resume} />
    </Switch>
)

export default Main;