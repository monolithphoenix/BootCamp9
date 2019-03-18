import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Main.css';
import Header from '../Header/Header'
import PageSelector from '../PageSelector/PageSelector'
import ContainerBMI from '../ContainerBMI/ContainerBMI'
import ContainerWeight from '../ContainerWeight/ContainerWeight'

const Main = props => {
    return (
        <div className='Main'>
            <Header />
            <PageSelector />
            <Switch>
                <Route exact path='/BMI' component={ContainerBMI}/>
                <Route path='/WeightGraph' component={ContainerWeight}/>
            </Switch>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;