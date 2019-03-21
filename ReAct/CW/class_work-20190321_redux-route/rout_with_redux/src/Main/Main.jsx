import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import All from '../All/All';
import SinglePage from '../SinglePage/SinglePage';


const Main = ({news}) => {
    return (
        <Switch>
            <Route exact path="/" component={All}/>
            {/* <Route path="/:id"  render= {props => {
                const result = news.find(el => el.publishedAt === props.match.params.id)
                console.log(result);
                return <SinglePage data={result}/>
            }} /> */}
            <Route path='/:id' component={SinglePage}/>
        </Switch>
    );
};

function MSTP (state) {
    return {
        news: state.news,
    }
}

export default connect(MSTP)(Main);