'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
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

function AddCourse() {
    const { data: session } = useSession()
    return (
        <>
            <CssBaseline />
            <div className={`wrapper`}>
                <Grid container spacing={0}>
                    <Grid item md={2}>
                        <Menu />
                    </Grid>
                    <Grid item md={10} style={{ padding: '30px 50px' }}>
                        <Header name='Add Course' />
                        <ButtonRedirect url={`/dashboard/courses`} name='Back' />
                        <Form />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AddCourse