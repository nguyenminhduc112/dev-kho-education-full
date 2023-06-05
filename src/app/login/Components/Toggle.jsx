import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
function Toggle(props) {
    return (
        <ToggleButtonGroup
            color="primary"
            value={props.alignment}
            exclusive
            onChange={props.handleChange}
            aria-label="Platform"

        >
            <ToggleButton value="home" className='toggleInterface'>Home</ToggleButton>
            <ToggleButton value="login" className='toggleInterface'>Sign In</ToggleButton>
            <ToggleButton value="register" className='toggleInterface'>SIGN UP</ToggleButton>
            <ToggleButton value="registerTeacher" className='toggleInterface'>Register Teacher</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default Toggle