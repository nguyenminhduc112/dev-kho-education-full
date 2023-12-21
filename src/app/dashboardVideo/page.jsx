'use client';
import React, { useEffect, useState } from 'react'
// Material UI
import { Button, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Fetch
import { getUser } from "Libs/fetch/user";
import { getVideos, getVideosByChapterID } from 'Libs/fetch/video';
// Next Auth
import { signOut, useSession } from "next-auth/react"

// Next Router
import { useRouter, useSearchParams } from "next/navigation";
// Component
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import VideoPlayer from './components/VideoPlayer';
// Styles
import "./styles.scss"
import { useMutation, useQuery } from 'react-query';
import { getChapters } from 'Libs/fetch/chapter';
import Link from 'next/link';
import { createMyCourse, getMyCourseByUserIDAndCourseID, updateMyCourse } from 'Libs/fetch/myCourse';

export default function DashboardVideo() {
    const { data: session } = useSession({
        required: true
    })
    const [status, setStatus] = useState(false)
    const router = useRouter()
    // Get params CourseID
    const params = useSearchParams()
    var courseID = params.get('courseID')
    var videoID = params.get('videoID')
    // Fetch Chapter
    const chapters = useQuery(['chapters', courseID], () => getChapters(courseID))
    // Function quay trở về trang cũ
    const handleGoBack = () => {
        router.push(`/detailCourse?courseID=${courseID}`)
    }

    // Fetch myCourse
    var userID = session ? session.user.id : ''
    const myCourse = useQuery(['myCourse', { userID, courseID }], () => getMyCourseByUserIDAndCourseID({ userID, courseID }))
    // AddMutation
    const addMutation = useMutation(createMyCourse, {
        onSuccess: () => {
            queryClient.prefetchQuery(['myCourse', { userID, courseID }], () => getMyCourseByUserIDAndCourseID({ userID, courseID }))
        }
    })

    if (myCourse.refetch.length == 0) {
        const formData = {
            id_user: userID,
            id_course: courseID,
            id_video: videoID
        }
        const createMyCourse = addMutation.mutateAsync(formData)
        createMyCourse.then((res) => {
            setStatus(!status)
        })
    }
    // Kiểm tra page này phải đăng nhập bằng tải khoản sinh viên
    if (!session) {
        return (
            <></>
        )
    } else {
        const user = getUser(session.user.id)
        user.then((res) => {
            if (res.id_role != 2) {
                router.push('/404')
            }
        })

    }


    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 30px' }}>
                    <Grid container spacing={3}>
                        <Grid item md={8}>
                            <button onClick={handleGoBack} className={`btnBack`}>Quay lại</button>
                            <VideoPlayer videoID={videoID} />
                        </Grid>
                        <Grid item md={4}>
                            <section className='section__content'>
                                <h3 className='section__content__title' style={{ fontSize: 24, fontWeight: 'bold' }}>Nội dung khóa học</h3>
                                {chapters.data?.map((chapter) => {
                                    return (
                                        <Accordion key={chapter._id}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography href={`#`} className='section__content__chapterName' style={{ fontWeight: 'bold' }}>{chapter.name}</Typography>

                                            </AccordionSummary>
                                            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                                                <VideoByChapter userID={userID} status={status} setStatus={setStatus} videoID={videoID} courseID={courseID} chapterID={chapter._id} />
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </section>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}
function VideoByChapter({ userID, status, setStatus, videoID, courseID, chapterID }) {
    // const myCourse = useQuery(['myCourse', { userID, courseID }], () => getMyCourseByUserIDAndCourseID(userID, courseID))
    // const updateMutation = useMutation(updateMyCourse, {
    //     onSuccess: () => {
    //         queryClient.prefetchQuery(['myCourses', userID], () => getMyCourseByUserID(userID))
    //     }
    // })
    // if (myCourse.data?.length !== 0) {
    //     const formData = {
    //         id_video: videoID,
    //         myCourseID: myCourse
    //     }
    // }

    // function handleWhenClickVideoNew() {

    // }
    // Fetch Videos
    const videos = useQuery(['videosByChapter', chapterID], () => getVideosByChapterID(chapterID))
    if (!videos.isLoading) {
        if (!videos.data.length == 0) {
            return (
                videos.data?.map((video, index) => {
                    return (
                        <Link key={video._id} style={{ display: 'block' }} onClick={() => {
                            setStatus(status ? false : true)
                            // handleWhenClickVideoNew()
                        }} href={`/dashboardVideo?courseID=${courseID}&videoID=${video._id}`} className={`section__content__text ${video._id === videoID ? 'active' : ''}`}>{index + 1}. {video.name}</Link>
                    )
                })
            )
        } else {
            return (
                <p className='section__content__textVideo'>Chương này chưa có video</p>
            )
        }
    }
}