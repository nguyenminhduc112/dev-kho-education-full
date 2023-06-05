'use client';
import React from 'react'
import Link from 'next/link'
// Material UI
import { Button, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
// Fetch
import { getUser } from "Libs/fetch/user";
import { getCourse } from 'Libs/fetch/course';
import { getChapters } from 'Libs/fetch/chapter';
// Next Auth
import { signOut, useSession } from "next-auth/react"
// Router
import { useRouter } from "next/navigation";
// Component
import Header from "../layout/Header";
import Menu from "../layout/Menu";
// Scss
import "./styles.scss"
// React Query
import { useQuery } from 'react-query';
import { getVideos, getVideosByChapterID } from 'Libs/fetch/video';
import { Alert } from '@mui/material';
import { getMyCourseByUserIDAndCourseID } from 'Libs/fetch/myCourse';

export default function DetailCourse() {
    const { data: session } = useSession()
    // Get params CourseID
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var courseID = params.courseID

    if (session) {
        var userID = session.user.id
    }
    // Fetch
    const course = useQuery(['coursesCategory', courseID], () => getCourse(courseID))
    const userID_course = course.data?.id_user
    const userBycourse = useQuery(['userBycourse', userID_course], () => getUser(userID_course))
    const chapters = useQuery(['chapters', courseID], () => getChapters(courseID))
    const myCourse = useQuery(['myCourse', { userID, courseID }], () => getMyCourseByUserIDAndCourseID({ userID, courseID }))
    const videosBycourseID = useQuery(['videosByCourseID', courseID], () => getVideos(courseID))
    const router = useRouter()
    // Lấy id đầu tiên của video
    var videoIDFrist = ''
    var index = 0
    videosBycourseID.data?.map((video) => {
        if (index === 0) {
            videoIDFrist = video._id
        }
        index = 2
    })
    // Function quay trở về trang cũ
    const handleGoBack = () => {
        router.push('/')
    }

    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 30px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={8}>
                            <button onClick={handleGoBack} className={`btnBack`}>Quay lại</button>
                            <h2 className='title'>{course.data?.title}</h2>
                            <section className='section__benefit'>
                                <h3 className='section__benefit__title'>Bạn sẽ học những gì sau khóa học này?</h3>
                                {course.data?.benefit}
                            </section>
                            <section className='section__request'>
                                <h3 className='section__request__title'>Bạn cần có những gì để tham gia khóa học này?</h3>
                                {course.data?.request}
                            </section>
                            <section className='section__content'>
                                <h3 className='section__content__title'>Nội dung khóa học</h3>
                                {chapters.data?.map((chapter) => {
                                    return (
                                        <Accordion key={chapter._id}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography style={{ fontWeight: 'bold' }}>{chapter.name}</Typography>

                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <VideoByChapter chapterID={chapter._id} />
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </section>
                        </Grid>
                        <Grid item md={4}>
                            <section className='section__about'>
                                <img src={course.data?.thumbnail} className='section__about__img' alt="" />

                                <p className='section__about__price'>Miễn phí</p>
                                {course.data?.status ? myCourse.data?.length == 0 ? (<div style={{ textAlign: 'center' }}><Link className='section__about__btnReg' href={`/dashboardVideo/?courseID=${courseID}&videoID=${videoIDFrist}`}>Đăng ký học</Link></div>) : (<Alert style={{ margin: '0px 50px' }} severity="info">Bạn đang học khóa này</Alert>) : ''}
                                <div className='section__about__blockIcon'>
                                    <p className='section__about__icon'><AccountCircleIcon /> <span>{userBycourse.data?.fullname}</span></p>
                                    <p className='section__about__icon'><NotStartedIcon /> <span> Tổng số có {videosBycourseID.data?.length} bài học</span></p>
                                    <p className='section__about__icon'><BatteryChargingFullIcon /> <span> Thái độ học nghiêm túc và học mọi lúc mọi nơi</span></p>
                                    <p className='section__about__icon'><OnlinePredictionIcon /> <span>{course.data?.status ? "Khóa học đang hoạt động" : "Khóa học chưa hoạt động"}</span></p>
                                </div>

                            </section>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}
function VideoByChapter({ chapterID }) {
    // Fetch
    const videos = useQuery(['videosByChapter', chapterID], () => getVideosByChapterID(chapterID))
    if (!videos.isLoading) {
        if (!videos.data.length == 0) {
            return (
                videos.data?.map((video, index) => {
                    return (
                        <p key={video._id} className='section__content__textVideo'>{index + 1}. {video.name}</p>
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
