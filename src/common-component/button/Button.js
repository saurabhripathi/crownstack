import React from 'react'
import { Button } from 'antd';

const button = (props) => {
    return (
        <React.Fragment>
            <Button onClick={props.clicked}
                type = {props.type}>
                {props.children}
            </Button>
        </React.Fragment>
    )
}

export default button