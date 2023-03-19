import React from 'react'
// Material UI
import { Button } from '@material-ui/core'
import Link from 'next/link'
import { Pagination } from '@mui/material'
// Redux
import { useDispatch, useSelector } from 'react-redux';
// React Query
import { useMutation, useQuery, useQueryClient } from 'react-query'
// Libs Fetch
import { getCourses } from 'Libs/fetch/course';
import { getUser } from 'Libs/fetch/user';
function Table() {
    // custom fetch course
    // const queryClient = useQueryClient()
    // const deteledUser = useMutation(deleteUser, {
    //     onSuccess: () => {
    //         queryClient.prefetchQuery('users', getUsers)
    //     }
    // })

    // danh sách khóa học
    const courses = useQuery('courses', getCourses)
    return (
        <div className='mainTable'>
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
        </div>
    )
}
const TrCourse = ({ _id,title, thumbnail, id_cat_cour, fullname, stt, status, email, id_user }) => {
    const user = useQuery(['user', id_user], () => getUser(id_user))
    return (
        <tr>
            <td><span>{stt}</span></td>
            <td><img src={thumbnail} width={40} height={40} alt="" style={{ borderRadius: '5px' }} /></td>
            <td>{title}</td>
            <td>{id_cat_cour}</td>
            <td>{user.data?.fullname}</td>
            <td>{status ? 'Active' : 'Inactive'}</td>
            <td>
                <Button variant='contained' className='btn btn-detail'><Link style={{ color: 'white' }} href={`/dashboard/courses/detail`}>Detail</Link></Button>
                <Button variant='contained' className='btn btn-delete'>Delete</Button>
            </td>
        </tr>
    )
}
export default Table