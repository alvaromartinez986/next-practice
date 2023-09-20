import React from 'react'
import Link from 'next/link'
import { Stack } from '@mui/material'

export default function Navbar() {
  return (
    <nav>
      <Stack component="menu" direction="row" justifyContent="space-between">
        <Link href="/">Avo Store</Link>
        <Link href="/about">Component</Link>
      </Stack>
    </nav>
  )
}
