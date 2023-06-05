'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import "./styles.scss";
import { getCategoryCourses } from 'Libs/fetch/category';
import { useQuery } from 'react-query';
import Link from 'next/link';
export default function Category() {
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
    const categoryCourses = useQuery('categoryCourses', getCategoryCourses)
    return (
        <>
            <Header />
            <Grid container spacing={0}>
                <Grid item md={1}>
                    <Menu />
                </Grid>
                <Grid item md={11} style={{ padding: '0px 20px' }}>
                    <h2 className='font-bold title mb-4' >Mục Lục</h2>
                    <p className='detail'>Ở đây sẽ hiển thị danh sách các mục lục các khóa học</p>
                    <Grid container spacing={3}>
                        {categoryCourses.data ? categoryCourses.data?.map((category) => {
                            return (
                                <Grid item md={2}>
                                    <div className="itemRoadmap">
                                        <Link href={`/courses?categoryID=${category._id}`}
                                            className='itemRoadmap__name'>
                                            {category.name}
                                        </Link>
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

