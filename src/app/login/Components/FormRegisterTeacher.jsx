import React from 'react'

function FormRegisterTeacher() {
    return (
        <div className={`formRegisterTeacher`}>
            <div className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={'/images/avatart-demo.png'} alt="" />
            </div>
            <h1 className={`title font-bold`}>Register Teacher</h1>
            <div className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedMcFoaEqew3xV2I-OPVBLhWfgre_NzSSROOOLbiY7KIzzAg/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default FormRegisterTeacher