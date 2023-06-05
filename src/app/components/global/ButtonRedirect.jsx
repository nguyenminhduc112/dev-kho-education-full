import React from 'react'
import { Button } from '@material-ui/core'
import Link from 'next/link'


function ButtonRedirect({ url, width = 164, height = 46, backgroundColor = '#5C61ED', color = 'white', name = "Button" }) {
  return (
    <Button variant="contained" style={{ backgroundColor: backgroundColor, width: width, height: height, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 0 }}>
      <Link href={url} style={{ color: color, textTransform: 'capitalize', display: 'block', width: '100%', height: '100%' }}>{name}</Link>
    </Button>
  )
}

export default ButtonRedirect