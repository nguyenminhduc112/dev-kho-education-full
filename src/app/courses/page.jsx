'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import "./styles.scss";
import { useQuery } from 'react-query';
import Link from 'next/link';
import { getCoursesByCategory } from 'Libs/fetch/course';
import { getCategoryCourse } from 'Libs/fetch/category';
export default function Category() {
    // Get params CourseID
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var categoryID = params.categoryID
    const router = useRouter()
    const getCoursesCategory = useQuery(['getCoursesCategory', categoryID], () => getCoursesByCategory(categoryID))
    const category = useQuery(['getcategory', categoryID], () => getCategoryCourse(categoryID))
    const handleGoBack = () => {
        router.push(`/category`)
    }
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 20px' }}>
                    <button onClick={handleGoBack} className={`btnBack`}>Quay lại</button>
                    <h2 className='font-bold title mb-4' >Danh sách khóa học về {category.data?.name}</h2>
                    <p className='detail'>Ở đây sẽ hiển thị danh sách các khóa học về {category.data?.name}</p>
                    <Grid container spacing={3}>
                        {getCoursesCategory.data ? getCoursesCategory.data?.map((course) => {
                            return (
                                <Grid key={course._id} item md={3} xs={12}>
                                    <div className="boxListCourse__course">
                                        <Link href={`/detailCourse/?courseID=${course._id}`} >
                                            <img src={`${course.thumbnail}`} alt="" className='boxListCourse__course__img' />
                                        </Link>
                                        <div className="boxListCourse__course__title">{course.title}</div>
                                        <Link href={`/detailCourse/?courseID=${course._id}`} className='boxListCourse__course__link'>Xem chi tiết khóa học</Link>
                                    </div>
                                </Grid>
                            )
                        }) : 'Không có category'}

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

