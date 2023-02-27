'use client';
import {  useSession } from 'next-auth/react'
import React from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import '../global.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';

function Users() {
  const { data: session } = useSession()
  return (
    <>
      <CssBaseline />
      <div className={`wrapper`}>
        <Grid container spacing={0}>
          <Grid item md={2}>
            <Menu />
          </Grid>
          <Grid item md={10} style={{ padding: '0px 50px' }}>
            <Header name='Users' />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Users