import React from 'react'
import Navb from '../layout/Navbar'
import ContactsList from './ContactsList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from './context'

const Contacts = () => {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <Navb />
                    <br />
                    <div className="container">
                        <Switch>
                            <Route exact path="/contacts" component={ContactsList} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    )
}
export default Contacts;