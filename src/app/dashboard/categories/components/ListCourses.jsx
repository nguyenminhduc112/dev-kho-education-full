import React, { useEffect, useState } from 'react'
// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
// Libs
import { deleteCategoryCourse, getCategoryCourses } from 'Libs/fetch/category'
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'

function ListCourses() {
  const categoryCourses = useQuery('categoryCourses', getCategoryCourses)
  return (
    <div className='mainTableCategory' style={{ overflow: 'auto' }}>
      <h2 className='titleTableCaterogy'>List Categorises</h2>
      {!categoryCourses.isLoading ? (<table className='table' >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryCourses.data?.map((category, index) => {
              category.stt = index + 1
              return (
                <TrListCategoryCourse {...category} key={index} />
              )

            })
          }
        </tbody>
      </table>) : (<div>...Loading</div>)}

    </div>
  )
}

const TrListCategoryCourse = ({ _id, name, stt }) => {
  // useMutation Delete Category Course
  const queryClient = useQueryClient()
  const DeleteCategoryCourse = useMutation(deleteCategoryCourse, {
    onSuccess: () => {
      queryClient.prefetchQuery('categoryCourses', getCategoryCourses)
    }
  })
  // Custom Alert Dialog Delete category
  const [open, setOpen] = useState(false)
  const handleCloseDiaglog = () => {
    setOpen(false)
  };

  const handleClickOpen = () => {
    setOpen(true)
  };
  // Call when agree delete user
  const handleDeleteCategoryCourse = () => {
    const deleted = DeleteCategoryCourse.mutateAsync(_id)
    deleted.then((res) => {
      setOpen(false)
    })
  }
  return (
    <tr>
      {open ? (<Dialog
        open={open}
        onClose={handleCloseDiaglog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn Có Chắc Muốn Xóa Mục Lục này Không?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            Nếu bạn chọn Agree thì mục lục {name} này này sẽ bị xóa vĩnh viễn bạn cân nhắc trước khi xóa, bấm Disagree để không xóa.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleDeleteCategoryCourse} autoFocus>
            Agree
          </Button>
          <Button onClick={handleCloseDiaglog}>Disagree</Button>
        </DialogActions>
      </Dialog>) : ''}

      <td><span>{stt}</span></td>
      <td>{name}</td>
      <td><Button variant='contained' onClick={handleClickOpen} className='btn btn-delete'>Delete</Button></td>
    </tr>
  )
}
export default ListCourses