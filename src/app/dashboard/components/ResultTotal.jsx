import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
function ResultTotal({name}) {
    return (
        <div className='blockResult'>
            <div className="blockIcon">
                <FaceIcon className='icon' />
            </div>
            <div className="result">
                <p className="name">{name}</p>
                <span className='number'>1.000</span>
            </div>
        </div>
    )
}

export default ResultTotal