import React, { Component } from 'react'
import classes from './Header.module.scss'
import Dropdown from '../../../common-component/dropdown/Dropdown'
import { connect } from 'react-redux'
import * as action from '../header/header-action'
import { withRouter } from 'react-router-dom'


class Header extends Component {
    subMenuClickHandler = (event) => {
        this.props.onFetchCategoryByLocation(event.key)
        this.routeChange()


    }
    menuItemClickHandler = (event) => {
        this.props.onFetchCategoryByBranch(event.key)
        this.routeChange()

    }
    
    routeChange = () => {
        if (this.props.history.location.pathname !== '/category') {
            this.props.history.push('/category')
        }
    }

    render() {
        return (<React.Fragment>
            <div className = {classes.Container}>
                <div className = {classes.Heading}>
                    RENTAL MANAGEMENT SYSTEM
            </div>
                <div className = {classes.Dropdown}>
                    <Dropdown
                        menu = {this.props.location}
                        menuItemClicked = {(event) => { return this.menuItemClickHandler(event) }}
                        subMenuClicked = {(event) => { return this.subMenuClickHandler(event) }}>
                    </Dropdown>
                </div>
            </div>
        </React.Fragment>)


    }
}

const mapsStateToProps = (state) => {
    return {
        location: state.headerReducer.location,
        selectedCategory: state.headerReducer.selectedCategory
    }
}



const mapsDispatchToProps = (dispatch) => {
    return {
        onFetchCategoryByBranch: (value) => {
            dispatch(action.fetchCategoryByBranch(value))
        },
        onFetchCategoryByLocation: (value) => {
            dispatch(action.fetchCategoryByLocation(value))
        }
    }
}
export default withRouter(connect(mapsStateToProps, mapsDispatchToProps)(Header))
