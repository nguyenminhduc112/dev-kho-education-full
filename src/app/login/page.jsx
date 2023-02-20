'use client';
import React, { useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Toggle from './Components/Toggle'
import Form from './Components/Form'
import FormRegister from './Components/FormRegister'
import './styles.scss'
export default function Home() {
    const [alignment, setAlignment] = React.useState('login');

    const handleChange = (event) => {
        if (alignment === 'login') {
            setAlignment('register')
        } else {
            setAlignment('login')
        }
    };
    return (
        <>
            <CssBaseline />
            <div className={`wrapper`}>
                <Grid container spacing={0} style={{ minHeight: alignment === 'login' ? '100vh' : '140vh' }}  >
                    <Grid item xs={12} md={6} style={{ paddingBottom: 0 }}>
                        <Toggle alignment={alignment} handleChange={handleChange} />
                        {alignment === 'login' ? <Form /> : <FormRegister />}
                    </Grid>
                </Grid>
                <img src={'/images/boxFaccyYellow.png'} className={`elementBoxYellow`} alt="" style={{ bottom: alignment === 'login' ? '0px' : '100px' }} />
                <img src={'/images/light.png'} className={`elementLight`} alt="" style={{ top: alignment === 'login' ? '-37px' : '0px' }} />
                <img src={'/images/manShitDown.png'} className={`elementMan`} style={{ top: alignment === 'login' ? '280px' : '400px' }} alt="" />
            </div>
        </>
    )
}
