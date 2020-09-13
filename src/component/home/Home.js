import React, { Component } from 'react'
import classes from '../home/Home.module.scss'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = {classes.Container}>
                    <div className = {classes.Wrapper}>
                        <p>
                            WELCOME TO
                    </p>
                        <p>
                            RENTAL MANAGEMENT SYSTEM
                    </p>
                        <p>

                        </p>
                    </div>
                    <div className = {classes.Footer}>
                        <p>
                            Please Select Location
                    </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
