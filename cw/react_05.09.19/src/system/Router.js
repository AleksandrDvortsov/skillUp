import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorite from '../components/pages/posts/Favorite';
import Post from '../components/pages/posts/Post';

function Router(props) {

    return (
        <Switch>
            <Route path="/" exact component={Post} />
            <Route path="/favorite" component={Favorite} />
        </Switch>
    )
}

export default Router;