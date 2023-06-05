'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import "./styles.scss"
export default function Roadmap() {
    // const router = useRouter()
    // const { data: session } = useSession({
    //   required: true
    // })
    // if (!session) {
    //   return (
    //     <></>
    //   )
    // } else {
    //   const user = getUser(session.user.id)
    //   user.then((res) => {
    //     if (res.id_role != 2) {
    //       router.push('/404')
    //     }
    //   })
    // }
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 20px' }}>
                    <h2 className='title font-bold mb-4'>Lộ Trình Học Tập</h2>
                    <p className='detail'>Ở đây sẽ hiển thị danh sách các lộ trình học giúp các bạn định hướng mà mình theo trước khi bắt đầu học</p>
                    <Grid container spacing={3}>
                        <Grid item md={2}>
                            <div className="itemRoadmap">
                                <a href="https://roadmap.sh/frontend" target='_blank' rel="noreferrer" className='itemRoadmap__name'>
                                    FrontEnd
                                </a>
                            </div>
                        </Grid>
                        {/* End */}
                        <Grid item md={2}>
                            <div className="itemRoadmap">
                                <a href="https://roadmap.sh/backend" target='_blank' rel="noreferrer" className='itemRoadmap__name'>
                                    BackEnd
                                </a>
                            </div>
                        </Grid>
                        {/* End */}
                        <Grid item md={2}>
                            <div className="itemRoadmap">
                                <a href="https://roadmap.sh/full-stack" target='_blank' rel="noreferrer" className='itemRoadmap__name'>
                                    Full Stack
                                </a>
                            </div>
                        </Grid>
                        {/* End */}
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

