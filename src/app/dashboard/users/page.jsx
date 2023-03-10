'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
import { Button, CssBaseline, Grid, TextField } from '@material-ui/core'
// SCSS
import '../global.scss'
import './styles.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import ButtonRedirect from '../../components/global/ButtonRedirect';
import Table from './components/Table';

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
            <div className="blockTitle">
              <ButtonRedirect name="Add User" url='/dashboard/users/add' />
              <form id='formSearch'>
                <TextField id="search" label="Search"  variant="filled" className='inputSearch' />
                <Button variant='contained' style={{backgroundColor:'#5C61ED',width:100,height:46,color:'white',borderRadius:10}}>Search</Button>
              </form>
            </div>
            <Table />
            
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Users