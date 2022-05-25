import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useSession, signIn, signOut } from "next-auth/react"
import fineLogo from '../public/fineLogo.png'
import Image from 'next/image'

export default function Nav() {
  const { data: session } = useSession()
  return (
    <>
    <Container maxWidth="md">
         <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image src={fineLogo} width={150} height={30} layout="fixed" />
              {/* Fine Spec Detailing */}
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/Features"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/Reviews"
              sx={{ my: 1, mx: 1.5 }}
            >
              Reviews
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/FAQ"
              sx={{ my: 1, mx: 1.5 }}
            >
              FAQ
            </Link>
          </nav>
          {session ? (
            <>
            <Button onClick={() => signOut()} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Logout
            </Button>
            <Button href="/bookings" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
             Bookings
            </Button>
            </>
          ) : 
          (
            <Button onClick={() => signIn()} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Container>
    </>
  )
}
