import React, { useState } from 'react'
// Material UI
import { Grid, InputLabel, MenuItem } from '@material-ui/core'
import { Alert, Select } from '@mui/material'
// Libs
import { registerUser } from 'Libs/fetch/register'
import { getUsers } from 'Libs/fetch/user'
// React Form Hook
import { useForm } from 'react-hook-form'
// React Query
import { useMutation, useQueryClient } from 'react-query'
function FormAddUser() {
    // handle event
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
        defaultValues: {
            username: '',
            password: '',
            fullname: '',
            email: '',
            role: '',
        }
    })
    // Addmutation user
    const queryClient = useQueryClient()
    const addMutation = useMutation(registerUser, {
        onSuccess: () => {
            queryClient.prefetchQuery('users', getUsers)
        }
    })
    // status register
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    // handle submit
    const handleRegister = (formData) => {
        try {
            const id_role = formData.role
            const register = addMutation.mutateAsync({ formData, id_role })
            // Xử lý sau khi submit
            register.then((res) => {
                if (res.error) {
                    setError(res.error)
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false)
                    }, 5000)
                } else {
                    reset()
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
    return (
        <div id="formMain">
            {isSuccess && !isError ? (<Alert severity="success" style={{ marginBottom: "20px" }}>Đăng ký thành công</Alert>) : ""}
            {isError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error}</Alert>) : ''}
            <form className='form' onSubmit={handleSubmit(handleRegister)} method='POST'>
                <Grid container spacing={10}>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="username" className='lableForm'>Username</label>
                        <input id='username' {...register('username', { required: "Username không được để trống" })} type="text" name='username' className='inputForm' />
                        {!isValid && errors.username ? (<p className='error'>{errors.username?.message}</p>) : ''}
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="password" className='lableForm'>Password</label>
                        <input id='password' {...register('password', {
                            required: "Password không được để trống", pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                                message: "Password không đúng định dạng"
                            }
                        })} type="password" name='password' className='inputForm' />
                        {!isValid && errors.password ? (<p className='error'>{errors.password?.message}</p>) : ''}
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="fullname" className='lableForm'>Full Name</label>
                        <input id='fullname' {...register('fullname', { required: "Full Name không được để trống" })} type="text" name='fullname' className='inputForm' />
                        {!isValid && errors.fullname ? (<p className='error'>{errors.fullname?.message}</p>) : ''}
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="email" className='lableForm'>Email</label>
                        <input id='email' {...register('email', {
                            required: "Email không được để trống", pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email không đúng định dạng"
                            }
                        })} type="text" name='email' className='inputForm' />
                        {!isValid && errors.email ? (<p className='error'>{errors.email?.message}</p>) : ''}
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <InputLabel id="roles" className='lableForm'>Roles</InputLabel>
                        <Select
                            labelId="roles"
                            id="roles"
                            className='inputForm'
                            {...register("role", {
                                required: "Hãy chọn quyền user"
                            })}
                            defaultValue={0}
                        >
                            <MenuItem value={0}>-- Select Role --</MenuItem>
                            <MenuItem value={2}>Students</MenuItem>
                            <MenuItem value={3}>Teacher</MenuItem>
                            <MenuItem value={4}>Checker</MenuItem>
                        </Select>
                        {!isValid && errors.role ? (<p className='error'>{errors.role?.message}</p>) : ''}
                    </Grid>
                </Grid>
                <div className="boxSubmit">
                    <button className='btnSubmit'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddUser