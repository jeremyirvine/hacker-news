import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav';
import PostsView from './views/PostsView/PostsView';
import PostView from './views/PostView/PostView';

const App = () => {

  return (
    <div className='light'>
      <div className='container'>
        <div>

          {/* <img src="https://news.ycombinator.com/y18.gif" /> <p>Hacker News</p> <small>Reader</small> */}
          <Logo />
        </div>
        <Nav />

        <Switch>
          <Route
            exact
            path='/'
            render={() => <PostsView type='top' />}
          />
          <Route
            path='/new'
            render={() => <PostsView type='new' />}
          />
          <Route 
            path='/post/:id'
            render={ props => <PostView { ...props } /> } /> 


          {/* <Route path='/post' component={Post} /> */}
          {/* <Route path='/user' component={User} /> */}
          <Route render={() => <h1>404: Not Found</h1>} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
