import React, { useState } from 'react'
// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Link from 'next/link'
import { Pagination } from '@mui/material'
// Redux
import { useDispatch, useSelector } from 'react-redux';
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'
// Libs Fetch
import { deleteCourse, getCourses, getCoursesByUserID } from 'Libs/fetch/course';
import { useSession } from 'next-auth/react'
import { getUser } from 'Libs/fetch/user'
function Table() {
    const { data: session } = useSession()
    // custom fetch course
    // const queryClient = useQueryClient()
    // const deteledUser = useMutation(deleteUser, {
    //     onSuccess: () => {
    //         queryClient.prefetchQuery('users', getUsers)
    //     }
    // })

    const userID = session ? session.user.id : ''
    const user = useQuery(['getUser', userID], () => getUser(userID))
    // danh sách khóa học
    const courses = useQuery('courses', getCourses)
    // danh dách khoa học theo userID
    const coursesByUserID = useQuery(['coursesByUserID', userID], () => getCoursesByUserID(userID))
    return (
        <>
            {user.data?.id_role === 1 || user.data?.id_role == 4 ? (<div className='mainTable'>
                <h2 className='captionTable'>List Courses</h2>
                {!courses.isLoading ? (<table className='table' >

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Catergory</th>
                            <th>Actor</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.data.map((course, index) => {
                            course.stt = index + 1
                            return (
                                <TrCourse {...course} key={index} />
                            )
                        })}
                    </tbody>
                </table>) : (<div>Loading.....</div>)}
                <Pagination count={10} variant="outlined" shape="rounded" color="secondary" className='pagination' style={{ marginTop: 50, float: 'right', color: 'white' }} />
            </div>) : (<div className='mainTable'>
                <h2 className='captionTable'>List Courses</h2>
                {!coursesByUserID.isLoading ? (<table className='table' >

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Catergory</th>
                            <th>Actor</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesByUserID.data.map((course, index) => {
                            course.stt = index + 1
                            return (
                                <TrCourse {...course} key={index} />
                            )
                        })}
                    </tbody>
                </table>) : (<div>Loading.....</div>)}
                <Pagination count={10} variant="outlined" shape="rounded" color="secondary" className='pagination' style={{ marginTop: 50, float: 'right', color: 'white' }} />
            </div>)}
        </>
    )
}
const TrCourse = ({ _id, title, thumbnail, id_cat_cour, fullname, stt, status, email, id_user }) => {
    const user = useQuery(['user', id_user], () => getUser(id_user))
    // useMutation Delete Category Course
    const queryClient = useQueryClient()
    const DeleteCourse = useMutation(deleteCourse, {
        onSuccess: () => {
            queryClient.prefetchQuery('courses', getCourses)
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
    const handleDeleteCourse = () => {
        const deleted = DeleteCourse.mutateAsync(_id)
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

                        Nếu bạn chọn Agree thì khóa {title} này này sẽ bị xóa vĩnh viễn bạn cân nhắc trước khi xóa, bấm Disagree để không xóa.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleDeleteCourse} autoFocus>
                        Agree
                    </Button>
                    <Button onClick={handleCloseDiaglog}>Disagree</Button>
                </DialogActions>
            </Dialog>) : ''}
            <td><span>{stt}</span></td>
            <td><img src={thumbnail} width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
            <td>{title}</td>
            <td>{id_cat_cour}</td>
            <td>{user.data?.fullname}</td>
            <td>{status ? 'Active' : 'Inactive'}</td>
            <td>
                <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/courses/detail/?courseID=${_id}`}>Detail</Link></Button>
                <Button variant='contained' onClick={handleClickOpen} className='btn btn-delete'>Delete</Button>
            </td>
        </tr>
    )
}
export default Table