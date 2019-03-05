import React, {Fragment} from 'react';
import HomePage from '../HomePage/HomePage';
import EmployeePage from '../EmployeePage/EmployeePage';
import './App.css'

const App = () => (
  <Fragment>
    {/* <p>Text</p> */}
    <div className='App'>
      <HomePage/>
      <EmployeePage/>
    </div>
  </Fragment>
)

export default App;