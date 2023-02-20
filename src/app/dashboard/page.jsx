'use client';
import { Button } from '@material-ui/core'
import { getUseByEmail } from 'Libs/fetch/user'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const { data: session } = useSession({
    required: true
  })
  if(!session){
    return(
      <></>
    )
  }
    return (
      <div>
        <div>Dashboard</div>
        <Button variant="contained" onClick={_ => signOut()}>SignOut</Button>
      </div>
    )
}

export default Dashboard