import { Button } from '@material-ui/core'
import React from 'react'
// Material UI
import { Pagination } from '@mui/material'
// Components
import ButtonRedirect from '../../components/global/ButtonRedirect'
function Table() {
  return (
    <>
      <div className='mainTable'>
        <h2 className='captionTable'>List Users</h2>
        <table className='table' >

          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>1</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>2</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>3</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>4</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>5</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>6</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>
            <tr>
              <td><span>7</span></td>
              <td><img src="/images/courses/react.png" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
              <td>Nguyễn Minh Đức</td>
              <td>11900325</td>
              <td>Teacher</td>
              <td>nguyenminhduc2001pt@gmail.com</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonRedirect name='Edit' url='/dashboard/users/edit' width={81} height={46} backgroundColor="#90B528" />
                <Button variant="contained" style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
              </td>
            </tr>

          </tbody>
        </table>
      </div> 
      <Pagination count={10} variant="outlined" shape="rounded" color="primary" style={{marginTop:20,float:'right'}} />
    </>

  )
}

export default Table