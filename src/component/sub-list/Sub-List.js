import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from '../list/List.module.scss'
import Button from '../../common-component/button/Button'


class SubList extends Component {

    render() {
        const { subCategories = [] } = this.props
        let card = subCategories.map((item, index) => {
            return <div className={classes.Card} key = {item.name + index}>
                <img alt="img"
                    src = {require(`../../assets/images/${item.image}`)}>
                </img>
                <Button type = "primary">{item.name}</Button>
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
        subCategories: state.headerReducer.subCategories
    }
}


export default connect(mapsStateToProps)(SubList)