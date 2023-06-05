'use client';
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
// Material
import { Button, CssBaseline, Grid, TextField } from '@material-ui/core'
// SCSS
import '../global.scss'
import './styles.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import Table from './components/Table';
import ButtonRedirect from '@/app/components/global/ButtonRedirect';
import { Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getUser } from 'Libs/fetch/user';
function Questions() {
  const router = useRouter()
  const [active, ChangActive] = useState('inactive')
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
      if (res.id_role == 2 || res.id_role == 3) {
        router.push('/404')
      }
    })
  }

  // Change active button
  const handleChangAcitve = () => {
    if (active === 'active') {
      ChangActive('inactive')
    } else {
      ChangActive('active')
    }
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
            <Header name='Questions' />
            <div className="blockTitle">
              <div>
                <Button variant='contained' onClick={handleChangAcitve} className={`btn-active ${active == 'active' ? 'active' : ''}`}>Active</Button>
                <Button variant='contained' onClick={handleChangAcitve} className={`btn-inactive ${active == 'inactive' ? 'active' : ''}`}>Inactive</Button>
              </div>
              <Alert severity="warning">Chức năng này trong quá trình phát triển</Alert>
              <form id='formSearch'>
                <TextField id="search" label="Search" variant="filled" className='inputSearch' />
                <Button variant='contained' style={{ backgroundColor: '#5C61ED', width: 100, height: 46, color: 'white', borderRadius: 10 }}>Search</Button>
              </form>
            </div>
            <Table />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Questions