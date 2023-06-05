'use client';
import React from 'react'
import { Button, Grid } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Image from 'next/image';
export default function About() {
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
        <Grid item md={11} style={{ padding: '0px 30px' }}>
          <h2 className='title mb-4 font-bold'>Giới thiệu</h2>
          <p className='leading-6 mb-3'>Chào mừng đến với trang web của chúng tôi - trang web cung cấp các khóa học trực tuyến một cách tiện lợi và hiệu quả nhất. Với các khóa học đa dạng và đầy đủ, chúng tôi cung cấp cho các bạn những nội dung chất lượng cao và giúp các bạn đạt được mục tiêu của mình.</p>
          <p className='leading-6 mb-3'>Trang web của chúng tôi còn cung cấp cho các bạn các chức năng đăng blog và đặt câu hỏi khi học, giúp các bạn có thể trao đổi và chia sẻ kiến thức và kinh nghiệm của mình với những người khác.</p>
          <p className='leading-6 mb-3'>Hơn nữa, chúng tôi luôn cập nhật các khóa học mới nhất và sử dụng phương pháp học tập linh hoạt, giúp các bạn có thể học tập bất cứ khi nào và ở bất cứ đâu. Với khóa học trực tuyến của chúng tôi, các bạn sẽ không còn phải trả tiền cho chi phí di chuyển cũng như lưu trú khi học tập.</p>
          <p className='leading-6 mb-3'>Chúng tôi hy vọng các bạn sẽ tham gia và khám phá các khóa học trực tuyến tại trang web của chúng tôi và tận dụng các chức năng đăng blog và đặt câu hỏi để chia sẻ kinh nghiệm học tập của mình. Cảm ơn các bạn đã ghé thăm trang web của chúng tôi!</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <Image src="/images/learning.jpg" width={500} height={100} style={{ borderRadius: '12px' }} />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

