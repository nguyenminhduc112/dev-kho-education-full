'use client';
import { useSession } from 'next-auth/react'
import React from 'react'
// Material
import { CssBaseline, Grid } from '@material-ui/core'
// SCSS
import '../../global.scss'
// Components
import Header from '../../layout/Header';
import Menu from '../../layout/Menu';
import ButtonRedirect from '@/app/components/global/ButtonRedirect';

function DetailQuestion() {
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
                        <Header name='Detail Questions' />
                        <ButtonRedirect url={`/dashboard/questions`} name='Back' />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default DetailQuestion