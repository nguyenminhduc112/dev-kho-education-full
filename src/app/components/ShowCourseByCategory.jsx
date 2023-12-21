import React from 'react'
import Link from 'next/link'
import './showCourrseByCategory.scss'
// Material UI
import { Box, CircularProgress, Grid } from '@material-ui/core'
// React Query
import * as reactQuery from 'react-query'
// List Fetch
import { getCategoryCourses } from 'Libs/fetch/category'
import { getCoursesByCategory } from 'Libs/fetch/course'
import Image from 'next/image'
function ShowCourseByCategory() {
    const categoryCourses = reactQuery.useQuery('categoryCourses', getCategoryCourses)

    return (
        <React.Fragment >
            {categoryCourses.isLoading ? (<Box sx={{ position: 'fixed', width: '100%', height: '100vh', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(90, 90, 90, 0.5)', zIndex: 1000 }}>
                <CircularProgress />
            </Box>) : null}
            {categoryCourses.data ? categoryCourses.data?.map((category) => {
                return (
                    <div key={category._id} className='boxListCourse'>
                        <h2 className='boxListCourse__title'>Khóa học dành cho {category.name}</h2>
                        <Grid container spacing={4}>
                            <Tr categoryID={category._id} />
                        </Grid>
                    </div>
                )
            }) : 'Không có category'}

        </React.Fragment>
    )
}
function Tr({ categoryID }) {
    const courses = reactQuery.useQuery(['coursesCategory', categoryID], () => getCoursesByCategory(categoryID))
    if (!courses.isLoading) {
        if (!(courses.data.length == 0)) {
            return (
                courses.data?.map((course) => {
                    return (
                        <Grid key={course._id} item md={3} xs={12}>
                            <div className="boxListCourse__course">
                                <Link href={`/detailCourse/?courseID=${course._id}`} >
                                    <Image width={500} height={200} src={`${course.thumbnail}`} alt="" className='boxListCourse__course__img' />
                                </Link>
                                <div className="boxListCourse__course__title">{course.title}</div>
                                <Link href={`/detailCourse/?courseID=${course._id}`} className='boxListCourse__course__link'>Xem chi tiết khóa học</Link>
                            </div>
                        </Grid>
                    )
                })
            )
        } else {
            return (
                <Grid item md={3} xs={12}>
                    <p style={{ fontStyle: 'italic' }}>Không có khóa học cho danh mục này 😥</p>
                </Grid>

            )
        }
    }

}
export default ShowCourseByCategory