'use client';
import React, { useState } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Toggle from './Components/Toggle'
import Form from './Components/Form'
import FormRegister from './Components/FormRegister'
import FormRegisterTeacher from './Components/FormRegisterTeacher';
import './styles.scss'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Home() {
    const [alignment, setAlignment] = React.useState('login');
    const router = useRouter()
    const handleChange = (event) => {
        if (event.target.value === 'login') {
            setAlignment('login')
        } else if (event.target.value === 'register') {
            setAlignment('register')
        }
        else if (event.target.value === 'home') {
            router.push('/')
        }
        else {
            setAlignment('registerTeacher')
        }
    };
    return (
        <>
            <CssBaseline />
            <div className={`wrapper`}>
                <Grid container spacing={0} style={{ minHeight: alignment === 'login' ? '100vh' : '140vh' }}  >
                    <Grid item xs={12} md={6} style={{ paddingBottom: 0 }}>
                        <Toggle alignment={alignment} handleChange={handleChange} />
                        {alignment === 'login' ? <Form /> : alignment === 'register' ? <FormRegister /> : <FormRegisterTeacher />}
                    </Grid>
                </Grid>
                <Image width={500} height={300} src={'/images/boxFaccyYellow.png'} className={`elementBoxYellow`} alt="" style={{ bottom: alignment === 'login' ? '0px' : '200px' }} />
                <Image width={200} height={100} src={'/images/light.png'} className={`elementLight`} alt="" style={{ top: alignment === 'login' ? '-37px' : '0px' }} />
                <Image width={300} height={300} src={'/images/manShitDown.png'} className={`elementMan`} style={{ top: alignment === 'login' ? '280px' : '400px' }} alt="" />
            </div>
        </>
    )
}
