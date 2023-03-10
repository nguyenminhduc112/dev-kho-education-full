'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
import { CssBaseline, Grid, TextField } from '@material-ui/core'
// SCSS
import '../../global.scss'
import '../styles.scss'
// Components
import Header from '../../layout/Header';
import Menu from '../../layout/Menu';
// Components
import ButtonRedirect from '../../../components/global/ButtonRedirect';
import FormEditUser from './components/FormEditUser';

function EditUser() {
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
                        <Header name='Edit User' />
                        <div className="blockTitle">
                            <ButtonRedirect name="Back" url='/dashboard/users' />
                        </div>
                        <FormEditUser />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default EditUser