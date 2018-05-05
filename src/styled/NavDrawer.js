import React from 'react'
// import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const NavToggleButton = ({toggle}) =>
{
    return (
        <FloatingActionButton onTouchTap={toggle}>
            <Menu />
        </FloatingActionButton>
    )
}

export default NavToggleButton