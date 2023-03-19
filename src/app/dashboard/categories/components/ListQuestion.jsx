import React, { useState } from 'react'
// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'
// Libs Fetch
import { deleteCategoryQuestion, getCategoryQuestions } from 'Libs/fetch/category'
function ListQuestion() {
  const categoryQuestions = useQuery('categoryQuestions', getCategoryQuestions)
  return (
    <div className='mainTableCategory'>
      <h2 className='titleTableCaterogy'>List Categorises</h2>
      <table className='table' >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            categoryQuestions.data?.map((category, index) => {
              category.stt = index + 1
              return (
                <TrListCategoryQuestion {...category} key={index} />
              )

            })
          }
        </tbody>
      </table>
    </div>
  )
}
const TrListCategoryQuestion = ({ _id, name, stt }) => {
  // useMutation Delete Category Course
  const queryClient = useQueryClient()
  const DeleteCategoryQuestion = useMutation(deleteCategoryQuestion, {
    onSuccess: () => {
      queryClient.prefetchQuery('categoryQuestions', getCategoryQuestions)
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
  const handleDeleteCategoryQeustion = () => {
    const deleted = DeleteCategoryQuestion.mutateAsync(_id)
    deleted.then((res) => {
      setOpen(false)
    })
  }

  return (
    // Lỗi Dialog Restore
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

          <Button onClick={handleDeleteCategoryQeustion} autoFocus>
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
export default ListQuestion