import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import '../src/styles/_global.scss';

const App = () => {
    return(
        <>
        <NavBar/>
        <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={600}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route path='/' exact component={Home} />
                            <Route path='/User' component={User} />
                            <Route path='/Contact' component={Contact} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )} />
                <Footer/>
        </>
    );
}

export default App;