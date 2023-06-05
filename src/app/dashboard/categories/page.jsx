'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
// Material UI
import { CssBaseline, Grid } from '@material-ui/core'
// SCSS
import '../global.scss'
import './styles.scss'
// Components
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import CategoriesCourses from './components/CategoriesCourses';
import ListCourses from './components/ListCourses';
import CategoriesQuestion from './components/CategoriesQuestion';
import ListQuestion from './components/ListQuestion';
import { useRouter } from 'next/navigation';
import { getUser } from 'Libs/fetch/user';
function Categories() {
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
      if (res.id_role == 2 || res.id_role == 3) {
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
            <Header name='Categories' />
            <Grid container spacing={2} style={{ marginTop: '70px' }}>
              <Grid item md={6}>
                <div style={{ height: '40vh', backgroundColor: '#2F3037', padding: '20px 70px', overflow: 'auto', borderRadius: 10 }}>
                  <CategoriesCourses />
                </div>
              </Grid>
              <Grid item md={6} >
                <div style={{ height: '40vh', backgroundColor: '#2F3037', padding: '20px 70px', overflow: 'auto', borderRadius: 10 }}>
                  <ListCourses />
                </div>
              </Grid>
              <Grid item md={6} >
                <div style={{ height: '40vh', backgroundColor: '#2F3037', padding: '20px 70px', overflow: 'auto', borderRadius: 10 }}>
                  <ListQuestion />
                </div>
              </Grid>
              <Grid item md={6} >
                <div style={{ height: '40vh', backgroundColor: '#2F3037', padding: '20px 70px', overflow: 'auto', borderRadius: 10 }}>
                  <CategoriesQuestion />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Categories