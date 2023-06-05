'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
import { Button, CssBaseline, Grid, TextField } from '@material-ui/core'
import '../global.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import ButtonRedirect from '@/app/components/global/ButtonRedirect';
import Table from './components/Table';
import { useRouter } from 'next/navigation';
import { getUser } from 'Libs/fetch/user';

function Courses() {
  const router = useRouter()
  const { data: session } = useSession({
    required: true
  })
  if (!session) {
    return (
      <></>
    )
  } else {
    const user = getUser(session.user.id)
    user.then((res) => {
      if (res.id_role == 2) {
        router.push('/404')
      }
    })
  }
  return (
    <>
      <CssBaseline />
      <div className={`wrapper`}>
        <Grid container spacing={0}>
          <Grid item md={2}>
            <Menu />
          </Grid>
          <Grid item md={10} style={{ padding: '30px 50px' }}>
            <Header name='Courses' />
            <div className="blockTitle">
              <ButtonRedirect name="Add Course" url='/dashboard/courses/add' />
              <form id='formSearch'>
                <TextField id="search" label="Search" variant="filled" className='inputSearch' />
                <button style={{ backgroundColor: '#5C61ED', width: 100, height: 46, color: 'white', borderRadius: 10, cursor: 'pointer' }}>Search</button>
              </form>
            </div>
            <Table />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Courses