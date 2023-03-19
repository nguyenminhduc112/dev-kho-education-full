'use client';
import {  useSession } from 'next-auth/react'
import React from 'react'
import { Button, CssBaseline, Grid, TextField } from '@material-ui/core'
import '../global.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import ButtonRedirect from '@/app/components/global/ButtonRedirect';
import Table from './components/Table';

function Courses() {
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
            <Header name='Courses' />
            <div className="blockTitle">
              <ButtonRedirect name="Add Course" url='/dashboard/courses/add' />
              <form id='formSearch'>
                <TextField id="search" label="Search"  variant="filled" className='inputSearch' />
                <button  style={{backgroundColor:'#5C61ED',width:100,height:46,color:'white',borderRadius:10,cursor:'pointer'}}>Search</button>
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