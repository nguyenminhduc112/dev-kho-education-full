'use client';
import { Button } from "@material-ui/core";
import { getUser } from "Libs/fetch/user";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const { data: session } = useSession({
    required: true
  })
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
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={_ => signOut()}>SignOut</Button>
    </div>
  )
}

