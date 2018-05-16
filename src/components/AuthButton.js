import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = (props) =>
{
    console.log(props)
    if(props.authenticated)
    {
        return(
            <RaisedButton label='Logout' onTouchTap={props.auth.logout} fullWidth={true} secondary={true} />
        )
    }
    else
    {
        return (
            <RaisedButton label='Login / Signup' onTouchTap={props.auth.logout} fullWidth={true} secondary={true} />
        )
    }
}

export default AuthButton