import { Button } from '@mui/material'
import React from 'react'

function SignOutForm(props) {
    //const user = user.findby(props.sessionId)
    const handleSignOut = () => {
      props.setSessionId(0)
    }
    return (
    <div>
        Currently logged in as (user.username), sessionId: (user.sessionId)
        <Button variant="contained" onClick={handleSignOut}>
          Sign Out
        </Button>
    </div>
    
  )
}

export default SignOutForm