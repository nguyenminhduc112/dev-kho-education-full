'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useQuery } from 'react-query';
import "./styles.scss"
import { getMyCourseByUserID } from 'Libs/fetch/myCourse';
import { getCourse } from 'Libs/fetch/course';
import Link from 'next/link';
import Image from 'next/image';
export default function MyCourse() {
    const { data: session } = useSession({
        required: true
    })
    if (session) {
        var userID = session.user.id;
    }
    const myCourses = useQuery(['myCourses', userID], () => getMyCourseByUserID(userID))
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 30px' }}>
                    <h2 className='title font-bold mb-5'>Khóa học của tôi</h2>
                    {myCourses.data ? myCourses.data?.map((mycourse) => {
                        return (
                            <Grid key={mycourse._id} container spacing={4}>
                                <Tr courseID={mycourse.id_course} videoID={mycourse.id_video} />
                            </Grid>
                        )
                    }) : 'Không có khóa học nào bạn đang học'}
                </Grid>

            </Grid>
        </>
    )
}
function Tr({ courseID, videoID }) {
    const course = useQuery(['courseByID', courseID], () => getCourse(courseID))
    if (!course.isLoading) {

        return (
            <Grid item md={3} xs={12}>
                <div className="boxListCourse__course">
                    <Link href={`/dashboardVideo/?courseID=${course.data?._id}&videoID=${videoID}`} >
                        <Image width={500} height={200} src={`${course.data?.thumbnail}`} alt="" className='boxListCourse__course__img' />
                    </Link>
                    <div className="boxListCourse__course__title">{course.data?.title}</div>
                    <Link href={`/dashboardVideo/?courseID=${course.data?._id}&videoID=${videoID}`} className='boxListCourse__course__link'>Tiếp tục học</Link>
                </div>
            </Grid>
        )
    }
}
