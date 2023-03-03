'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import './stylesDashboard.scss'
import './global.scss'
// Components
import Header from './layout/Header';
import Menu from './layout/Menu';
import ResultTotal from './components/ResultTotal';
import Table from './components/Table';
import { getUser } from 'Libs/fetch/user';
import { useRouter } from "next/navigation";
function Dashboard() {
  // const router = useRouter()
  // const { data: session } = useSession({
  //   required: true
  // })
  // if (!session) {
  //   return (
  //     <></>
  //   )
  // } else {
  //   const user = getUser(session.user.id)
  //   user.then((res) => {
  //     if (res.id_role == 2) {
  //       router.push('/404')
  //     }
  //   })
  // }
  return (
    <>
      <CssBaseline />
      <div className={`wrapper`}>
        <Grid container spacing={0}>
          <Grid item md={2}>
            <Menu />
          </Grid>
          <Grid item md={10} style={{ padding: '0px 50px' }}>
            <Header name='Dashboard' />
            <h2>Learning State</h2>
            <Grid container spacing={2}>
              <Grid item md={3}><ResultTotal name='Total Student' /></Grid>
              <Grid item md={3}><ResultTotal name='Total Course' /></Grid>
              <Grid item md={3}><ResultTotal name='Total Teacher' /></Grid>
              <Grid item md={3}><ResultTotal name='Total Question' /></Grid>
            </Grid>
            <Table />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dashboard