import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

import ModelSHystory from '../ModelSHystory/ModelSHystory';

const ModelS = (props) => {
    return (
        <div>
            <img src="https://www.tesla.com/tesla_theme/assets/img/models/v1.0/section-hero-background.jpg?20180111" alt="" className='main_image'/ >
            <p>The Tesla Model S is an all-electric five-door liftback car, produced by Tesla, Inc., and introduced on June 22, 2012. The EPA official range for the 2017 Model S 100D, which is equipped with a 100 kWh (360 MJ) battery pack, is 335 miles (539 km), higher than any other electric car.</p>
            <ul className="menu">
                <li>
                    <NavLink to={`${props.match.path}/history`} className="menu_link">History</NavLink>
                </li>
                <li>
                    <NavLink to={`${props.match.path}/desc`} className="menu_link">Description</NavLink>
                </li>
                <li>
                    <NavLink to={`${props.match.path}/image`} className="menu_link">Image</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path='/ModelS' component=''/>
                <Route path={`${props.match.path}/history`} component={ModelSHystory}/>
            </Switch>

        </div>
    );
};

export default ModelS;