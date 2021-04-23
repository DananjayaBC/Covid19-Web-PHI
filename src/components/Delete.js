import React from 'react'
import Navb from '../layout/Navbar'
import DeleteList from './Delete/DeleteUser'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from './context'

const Delete = () => {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <Navb />
                    <br />
                    <div className="container">
                        <Switch>
                            <Route exact path="/delete" component={DeleteList} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    )
}
export default Delete;