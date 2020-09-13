import React from 'react'
import { Menu, Dropdown } from 'antd';
const { SubMenu } = Menu
const dropdown = (props) => {
   const { menu = [] } = props
   const menuList = <Menu onClick={props.menuItemClicked}>
      {menu.map((item, index) => {
         return (
            <SubMenu onTitleClick={props.subMenuClicked}
               key = {item.name}
               title = {item.name}>
               {item.branches.map((item, index) => {
                  return (<Menu.Item key = {item.name}>{item.name}</Menu.Item>)
               })}
            </SubMenu>
         )
      })}

   </Menu>
   return (
      <React.Fragment>
         <Dropdown overlay={menuList} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Select Location
             </a>
         </Dropdown>
      </React.Fragment>
   )
}

export default dropdown