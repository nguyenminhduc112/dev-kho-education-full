import React, { useState } from 'react'
// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, MenuItem, Select } from '@material-ui/core'
// React Querys
import { useMutation, useQuery, useQueryClient } from 'react-query'
// React Form Hook
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material';
// List Fetch
import { getChapter, getChapters } from 'Libs/fetch/chapter';
import { createVideo, deleteVideo, getVideos } from 'Libs/fetch/video';
import { useSearchParams } from 'next/navigation';
function FormAddVideo() {
    const params = useSearchParams()
    var courseID = params.get('courseID')
    const { register, handleSubmit, reset, watch, formState: { errors, isValid } } = useForm()
    // use Query chapter and videos
    const chapters = useQuery(['chapters', courseID], () => getChapters(courseID))
    const videos = useQuery(['videos', courseID], () => getVideos(courseID))
    // Addmutation chapter
    const queryClient = useQueryClient()
    const addMutation = useMutation(createVideo, {
        onSuccess: () => {
            queryClient.prefetchQuery(['videos', courseID], () => getVideos(courseID))
        }
    })
    // status create chapter
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    // handle submit
    const handleCreateVideo = (formData) => {
        try {
            const createVideo = addMutation.mutateAsync({ formData, courseID })
            // Xử lý sau khi submit
            createVideo.then((res) => {
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
                <form action="" className='formMain' onSubmit={handleSubmit(handleCreateVideo)} method='POST'>
                    {isSuccess && !isError ? (<Alert severity="success" style={{ marginBottom: "20px" }}>Tạo Chapter thành công</Alert>) : ""}
                    {isError ? (<Alert severity='error' style={{ marginBottom: 30 }}>{error}</Alert>) : ''}
                    <label htmlFor="" className='lableForm'>Name</label>
                    <input type="text" {...register('name', { required: "Tên Video không được để trống" })} name='name' className='inputForm' />
                    {!isValid && errors.name ? (<p className='error'>{errors.name?.message}</p>) : ''}
                    {/* End input name */}
                    <label htmlFor="" className='lableForm' style={{ marginTop: '20px' }}>ID Video Youtube</label>
                    <input type="text" {...register('id_video_youtube', { required: "ID youtube không được để trống" })} name='id_video_youtube' className='inputForm' />
                    {!isValid && errors.youtubeID ? (<p className='error'>{errors.youtubeID?.message}</p>) : ''}
                    {/* End input id youtube */}
                    <lable className="lableForm" style={{ marginTop: '20px' }}>
                        Chapters
                    </lable>
                    <Select
                        labelId="id_chapter"
                        id="id_chapter"
                        className='inputForm'
                        {...register("id_chapter", {
                            required: "Hãy chọn chapter"
                        })}
                    >
                        {chapters.data?.map((chapter, index) => {
                            return (
                                <MenuItem key={chapter._id} value={chapter._id}>{chapter.name}</MenuItem>
                            )
                        })}

                    </Select>
                    {!isValid && errors.status ? (<p className='error'>{errors.status?.message}</p>) : ''}
                    {/* End input list chapter */}
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
                    {!videos.isLoading ? (<table className='table' >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Chapter</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                videos.data?.map((video, index) => {
                                    video.id_course = courseID
                                    return (
                                        <TrListVideo {...video} key={index} />
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
const TrListVideo = ({ _id, name, id_course, id_video_youtube, id_chapter, stt }) => {
    const chapterID = id_chapter
    const courseID = id_course
    const chapter = useQuery(['chapter', chapterID], () => getChapter(chapterID))
    // useMutation Delete Category Course
    const queryClient = useQueryClient()
    const DeleteVideo = useMutation(deleteVideo, {
        onSuccess: () => {
            queryClient.prefetchQuery(['videos', courseID], () => getVideos(courseID))
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
        const deleted = DeleteVideo.mutateAsync(_id)
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
                    {"Bạn Có Chắc Muốn Xóa Video này Không?"}
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
            <td>{chapter.data?.name}</td>

            <td><Button variant='contained' onClick={handleClickOpen} className='btn btn-delete'>Delete</Button></td>
        </tr>
    )
}
export default FormAddVideo