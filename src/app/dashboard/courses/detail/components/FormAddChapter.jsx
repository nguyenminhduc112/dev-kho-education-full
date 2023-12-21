import React, { useState } from 'react'
// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, MenuItem, Select } from '@material-ui/core'
// React Querys
import { useMutation, useQuery, useQueryClient } from 'react-query'
// React Form Hook
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material';
// List Fetch
import { createChapter, deleteChapter, getChapters } from 'Libs/fetch/chapter';
import { useSearchParams } from 'next/navigation';
function FormAddChapter() {
    const params = useSearchParams()
    var courseID = params.get('courseID')
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm({
        defaultValues: {
            chapter: ''
        }
    })
    // use Query chapter fetch list chapter by id course
    const chapters = useQuery(['chapters', courseID], () => getChapters(courseID))
    // Addmutation chapter
    const queryClient = useQueryClient()
    const addMutation = useMutation(createChapter, {
        onSuccess: () => {
            queryClient.prefetchQuery(['chapters', courseID], () => getChapters(courseID))
        }
    })
    // status create chapter
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    // handle submit
    const handleCreateChapter = (formData) => {
        try {
            const createChapter = addMutation.mutateAsync({ formData, courseID })
            // Xử lý sau khi submit
            createChapter.then((res) => {
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
        <Grid container spacing={5} style={{ marginTop: '30px' }}>
            <Grid item md={6}>
                <form action="" className='formMain' onSubmit={handleSubmit(handleCreateChapter)} method='POST'>
                    {isSuccess && !isError ? (<Alert severity="success" style={{ marginBottom: "20px" }}>Tạo Chapter thành công</Alert>) : ""}
                    {isError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error}</Alert>) : ''}
                    <label htmlFor="" className='lableForm'>Chapter</label>
                    <input type="text" {...register('chapter', { required: "Tên chapter không được để trống" })} name='chapter' className='inputForm' />
                    {!isValid && errors.chapter ? (<p className='error'>{errors.chapter?.message}</p>) : ''}
                    <label htmlFor="" className='lableForm' style={{ marginTop: '20px' }}>STT</label>
                    <input type="number" {...register('stt', { required: "STT không được để trống" })} name='stt' className='inputForm' />
                    {!isValid && errors.stt ? (<p className='error'>{errors.stt?.message}</p>) : ''}
                    <div style={{ textAlign: 'center' }}>
                        <button className='btnSubmit btnSubmiChapter'>Add</button>
                    </div>
                </form>
            </Grid>
            <Grid item md={6}>
                <div className='mainTableChapter' style={{ overflow: 'auto' }}>
                    {!chapters.isLoading ? (<table className='table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                chapters.data?.map((chapter, index) => {
                                    return (
                                        <TrListChapter {...chapter} key={index} />
                                    )

                                })
                            }
                        </tbody>
                    </table>) : (<div>...Loading</div>)}

                </div>
            </Grid>
        </Grid>
    )
}
const TrListChapter = ({ _id, name, id_course, stt }) => {
    // useMutation Delete Category Course
    const queryClient = useQueryClient()
    const DeleteChapter = useMutation(deleteChapter, {
        onSuccess: () => {
            queryClient.prefetchQuery(['chapters', id_course], () => getChapters(id_course))
        }
    })
    // Custom Alert Dialog Delete chapter
    const [open, setOpen] = useState(false)
    const handleCloseDiaglog = () => {
        setOpen(false)
    };

    const handleClickOpen = () => {
        setOpen(true)
    };
    // Call when agree delete chapter
    const handleDeleteCategoryCourse = () => {
        const deleted = DeleteChapter.mutateAsync(_id)
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
                    {"Bạn Có Chắc Muốn Xóa Chapter này Không?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                        Nếu bạn chọn Agree thì chapter {name} này này sẽ bị xóa vĩnh viễn bạn cân nhắc trước khi xóa, bấm Disagree để không xóa.
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
export default FormAddChapter