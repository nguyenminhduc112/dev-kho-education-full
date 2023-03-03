import { Button, Grid, InputLabel, MenuItem } from '@material-ui/core'
import { Select } from '@mui/material'
import React from 'react'

function FormEditUser() {
    return (
        <div id="formMain">
            <form className='form'>
                <Grid container spacing={10}>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="username" className='lableForm'>Username</label>
                        <input id='username' type="text" name='username' value='119000325' className='inputForm' />
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="password" className='lableForm'>Password</label>
                        <input id='password' type="text" disabled name='password' value='0385539722Duc!@#' className='inputForm disabled' />
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="username" className='lableForm'>Full Name</label>
                        <input id='fullName' type="text" name='fullName' value='Nguyễn Minh Đức' className='inputForm' />
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <label htmlFor="email" className='lableForm'>Email</label>
                        <input id='email' type="text" name='email' value='nguyenminhduc2001pt@gmail.com' className='inputForm' />
                    </Grid>
                    <Grid item md={6} className='inputGroup'>
                        <InputLabel id="roles" className='lableForm'>Roles</InputLabel>
                        <Select
                            value={2}
                            labelId="roles"
                            id="roles"
                            className='inputForm'

                        >
                            <MenuItem value={2}>Students</MenuItem>
                            <MenuItem value={3}>Teacher</MenuItem>
                            <MenuItem value={4}>Checker</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <div className="boxSubmit">
                    <Button className='btnSubmit'>Uppdate</Button>
                </div>
            </form>
        </div>
    )
}

export default FormEditUser