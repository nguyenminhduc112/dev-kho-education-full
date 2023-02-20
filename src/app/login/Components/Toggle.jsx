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
            <ToggleButton value="login" className='toggleInterface'>Login</ToggleButton>
            <ToggleButton value="register" className='toggleInterface'>Register</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default Toggle