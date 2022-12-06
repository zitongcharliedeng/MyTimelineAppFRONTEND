import { Button } from '@mui/material'
import React from 'react'

function SignOutForm(props) {
    const handleSignOut = () => {
      props.setCurrentUser({id: '', username: '', sessionToken: ''})
    }
    return (
    <div>
        Currently logged in as user:{props.currentUser.username}
        <Button variant="contained" onClick={handleSignOut}>
          Sign Out
        </Button>
    </div>
    
  )
}

export default SignOutForm