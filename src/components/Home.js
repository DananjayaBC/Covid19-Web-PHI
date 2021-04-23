import React from 'react'
import Navb from '../layout/Navbar'
import SearchList from './SearchList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from './context'

const Home = () => {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <Navb />
                    <br />
                    <div className="container">
                        <Switch>
                            <Route exact path="/home" component={SearchList} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    )
}
export default Home;