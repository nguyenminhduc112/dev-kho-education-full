'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
export default function Question() {
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
                    <h2>Câu hỏi</h2>
                </Grid>

            </Grid>
        </>
    )
}

