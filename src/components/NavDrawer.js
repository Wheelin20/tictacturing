import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

class NavDrawer extends Component
{
    render()
    {
        return (
            <div>
                <FloatingActionButton>
                    <Menu />
                </FloatingActionButton>
            </div>
        )
    }
}

export default NavDrawer