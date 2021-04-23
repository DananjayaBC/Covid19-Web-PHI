import React from 'react'
import Navb from '../layout/Navbar'
import HealthStatusList from './HealthStatusList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from './context'

const Health = () => {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <Navb />
                    <br />
                    <div className="container">
                        <Switch>
                            <Route exact path="/health" component={HealthStatusList} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    )
}
export default Health;