import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from '../list/List.module.scss'
import Button from '../../common-component/button/Button'
import * as action from '../contant/header/header-action'
import { withRouter } from 'react-router-dom'

class List extends Component {

    clickHandlerFn = (value) => {
        this.props.onFetchSubCategory(value)
        this.props.history.push('/category/' + value)
    }

    render() {
        const { selectedCategory = [] } = this.props
        let card = selectedCategory.map((item, index) => {
            return <div className={classes.Card} key={item.name + index}>
                <img alt="img"
                    src = {require(`../../assets/images/${item.image}`)}>
                </img>
                <Button clicked = {() => { return this.clickHandlerFn(item.name) }} type="primary">{item.name}</Button>
            </div>
        })

        return (
            <React.Fragment>
                <div className = {classes.Container}>
                    {card}
                </div>
            </React.Fragment>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        selectedCategory: state.headerReducer.selectedCategory
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        onFetchSubCategory: (value) => {
            dispatch(action.fetchSubCategory(value))
        }
    }
}
export default withRouter(connect(mapsStateToProps, mapsDispatchToProps)(List))