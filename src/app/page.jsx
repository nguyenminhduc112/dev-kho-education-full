'use client';
import { Button } from "@material-ui/core";
import { signOut, useSession } from "next-auth/react"
export default function Home() {
  const { data: session } = useSession({
    required: true
  })
  if(!session){
    return(
      <></>
    )
  }
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={_ => signOut()}>SignOut</Button>
    </div>
  )
}

