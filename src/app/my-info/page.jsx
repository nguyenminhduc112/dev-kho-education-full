'use client';
// Material UI
import { Grid, InputLabel, MenuItem } from '@material-ui/core'
import { Alert, Select } from '@mui/material'
// Libs
import { getUser, updateUser, getUsers } from 'Libs/fetch/user'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
// React Form Hook
import { useForm } from 'react-hook-form'
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'
// Component
import Header from '../layout/Header';
import Menu from '../layout/Menu';
export default function MyInfo() {

    const router = useRouter()
    const { data: session } = useSession({
        required: true
    })
    if (session) {
        var userID = session.user.id;
    }

    const { isLoading, data } = useQuery(['user', userID], () => getUser(userID))
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm()
    // handle event
    // Addmutation user
    const queryClient = useQueryClient()
    const editMutation = useMutation(updateUser, {
        onSuccess: () => {
            queryClient.prefetchQuery('users', getUsers)
        }
    })

    // status register
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    // Sau khi submit 
    const handledUpdateUser = (formData) => {
        try {
            const uppdated = editMutation.mutateAsync({ formData, userID })
            // Xử lý sau khi submit
            uppdated.then((res) => {
                if (res.error) {
                    setError(res.error)
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false)
                    }, 5000)
                } else {
                    setIsSuccess(true)
                    setTimeout(() => {
                        setIsSuccess(false)
                    }, 5000)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    if (!userID) {
        return (
            <></>
        )
    }
    if (isLoading) {
        return (
            <div>...Loading</div>
        )
    }
    if (!session) {
        return (
            <></>
        )
    }
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 30px' }}>
                    <h2 className='title font-bold'>Thông tin tài khoản</h2>
                    <div id="formMain" className='mt-6'>
                        {isSuccess && !isError ? (<Alert severity="success" style={{ marginBottom: "20px" }}>Cập nhật thành công</Alert>) : ""}
                        {isError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error}</Alert>) : ''}
                        <form className='form' method="POST" onSubmit={handleSubmit(handledUpdateUser)}>
                            <Grid container spacing={10}>
                                <Grid item md={6} className='inputGroup'>
                                    <label htmlFor="username" className='lableForm'>Username</label>
                                    <input id='username' {...register('username', { required: "Username không được để trống" })} type="text" name='username' defaultValue={data.username} className='inputForm' />
                                    {!isValid && errors.username ? (<p className='error'>{errors.username?.message}</p>) : ''}
                                </Grid>
                                <Grid item md={6} className='inputGroup d-none'>
                                    <label htmlFor="password" className='lableForm'>Password</label>
                                    <input id='password'  {...register('password', {
                                        required: "Password không được để trống"
                                    })} type="text" readonly name='password' defaultValue={data.password} className='inputForm disabled' />
                                    {!isValid && errors.password ? (<p className='error'>{errors.password?.message}</p>) : ''}
                                </Grid>
                                <Grid item md={6} className='inputGroup'>
                                    <label htmlFor="fullname" className='lableForm'>Full Name</label>
                                    <input id='fullname' {...register('fullname', { required: "Full Name không được để trống" })} type="text" name='fullname' defaultValue={data.fullname} className='inputForm' />
                                    {!isValid && errors.fullname ? (<p className='error'>{errors.fullname?.message}</p>) : ''}
                                </Grid>
                                <Grid item md={6} className='inputGroup'>
                                    <label htmlFor="email" className='lableForm'>Email</label>
                                    <input id='email' {...register('email', {
                                        required: "Email không được để trống", pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Email không đúng định dạng"
                                        }
                                    })} type="text" defaultValue={data.email} name='email' className='inputForm' />
                                    {!isValid && errors.email ? (<p className='error'>{errors.email?.message}</p>) : ''}
                                </Grid>
                                <Grid item md={6} className='inputGroup d-none'>
                                    <InputLabel id="roles" className='lableForm'>Roles</InputLabel>
                                    <Select
                                        labelId="role"
                                        id="role"
                                        className='inputForm'
                                        name='role'
                                        {...register("role", {
                                            required: "Hãy chọn quyền user"
                                        })}
                                        defaultValue={data.id_role}
                                    >
                                        <MenuItem value={0} >-- Select Role --</MenuItem>
                                        <MenuItem value={2}>Students</MenuItem>
                                        <MenuItem value={3}>Teacher</MenuItem>
                                        <MenuItem value={4}>Checker</MenuItem>
                                    </Select>
                                    {!isValid && errors.role ? (<p className='error'>{errors.role?.message}</p>) : ''}
                                </Grid>
                            </Grid>
                            <div className="boxSubmit">
                                <button className='btnSubmit'>Uppdate</button>
                            </div>
                        </form>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

