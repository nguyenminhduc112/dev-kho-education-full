import React, { use, useEffect, useState } from 'react'
// Material UI
import { Pagination } from '@mui/material'
import { Box, Button } from '@material-ui/core'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'
// Components
import ButtonRedirect from '../../../components/global/ButtonRedirect'
// API
import { getUsers, deleteUser } from 'Libs/fetch/user'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { dialogDeleteVisible } from '../reducers/UserSlice';
import Image from 'next/image';

function Table() {


  // 
  const { isLoading, isError, error, data } = useQuery('users', getUsers)

  return (
    <>

      <div className='mainTable'>
        <h2 className='captionTable'>List Users</h2>
        {!isLoading ? (<table className='table' >

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
            {data.map((user, index) => {
              user.stt = index
              return (
                <TrUser {...user} key={index} />
              )
            })}
          </tbody>
        </table>) : (<div>Loading.....</div>)}

      </div>
      <Pagination count={10} variant="outlined" shape="rounded" color="primary" style={{ marginTop: 20, float: 'right', color: 'white' }} />
    </>

  )

}
const TrUser = ({ _id, fullname, username, stt, id_role, email }) => {
  // custom fetch users
  const queryClient = useQueryClient()
  const deteledUser = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.prefetchQuery('users', getUsers)
    }
  })
  // Custom Alert Dialog Delete User
  const open = useSelector((state) => state.crudUser.client.open)
  const dispatch = useDispatch()
  const handleCloseDiaglog = () => {
    dispatch(dialogDeleteVisible(false))
  };

  const handleClickOpen = () => {
    dispatch(dialogDeleteVisible(true))
  };
  // Call when agree delete user
  const handleDeleteUser = () => {
    const deleted = deteledUser.mutateAsync(_id)
    deleted.then((res) => {
      dispatch(dialogDeleteVisible(false))
    })
  }

  if (id_role != 1) {
    return (
      <tr>
        <Dialog
          open={open}
          onClose={handleCloseDiaglog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn Có Chắc Muốn Xóa User"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Nếu bạn chọn Agree thì user này sẽ bị xóa vĩnh viễn bạn cân nhắc trước khi xóa, bấm Disagree để không xóa.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteUser} autoFocus>
              Agree
            </Button>
            <Button onClick={handleCloseDiaglog}>Disagree</Button>
          </DialogActions>
        </Dialog>

        <td><span>{stt}</span></td>
        <td><Image src="/images/avartar_users/avartar_admin.jpg" width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
        <td>{fullname}</td>
        <td>{username}</td>
        <td>{id_role == 2 ? 'Student' : id_role == 3 ? 'Teacher' : 'Checker'}</td>
        <td>{email}</td>
        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ButtonRedirect name='Edit' url={`/dashboard/users/edit?userID=${_id}`} width={81} height={46} backgroundColor="#90B528" />
          <Button variant="contained" onClick={handleClickOpen} style={{ width: 81, height: 46, borderRadius: 10, backgroundColor: '#E55353', marginLeft: 6, color: 'white' }} >Delete</Button>
        </td>
      </tr>
    )
  }
}
export default Table