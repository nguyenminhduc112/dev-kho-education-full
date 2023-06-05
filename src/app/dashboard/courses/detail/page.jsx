'use client';
import React from 'react'
import { useSession } from 'next-auth/react'

// Material
import { CssBaseline, Grid } from '@material-ui/core'
// SCSS
import '../../global.scss'
import './styles.scss'
// Components
import Header from '../../layout/Header';
import Menu from '../../layout/Menu';
import ButtonRedirect from '@/app/components/global/ButtonRedirect';
import Form from './components/Form';
import FormAddChapter from './components/FormAddChapter';
import FormAddVideo from './components/FormAddVideo';

function DetailCourses() {
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
                        <Header name='Detail Courses' />
                        <ButtonRedirect url={`/dashboard/courses`} name='Back' />
                        <div id='FormDetailCourse'>
                            <Form />
                            <FormAddChapter />
                            <FormAddVideo />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default DetailCourses