import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router-dom'
import NavToggleButton from '../styled/NavDrawer'

class NavDrawer extends Component
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            open: true,
            width: 250
        }
    }

    toggle = () =>
    {
        this.setState((prevState, props) =>
        {
            return { open: !prevState.open }
        })
    }

    render()
    {
        return (
            <div>
                <NavToggleButton toggle={this.toggle} open={this.state.open} width={this.state.width} />
                <Drawer open={this.state.open} width={this.state.width}>
                    <div style={{height: '200px', width: '100%', backgroundColor: 'salmon'}}>
                        <h2>LoginContainer Placeholder</h2>
                    </div>
                    <Divider />
                    <Link to='/'>
                        <MenuItem primaryText={'Play'} onTouchTap={this.toggle}/>
                    </Link>
                    <Link to='/profile'>
                        <MenuItem primaryText={'Profile'} onTouchTap={this.toggle} />
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default NavDrawer