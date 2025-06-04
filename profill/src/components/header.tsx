import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="absolute z-10 top-0">
      <Link href='/' className="mx-4">Home</Link>
      <Link href='/SWbasic' className="mx-4">SWbasic</Link>
    </div>
  )
}

export default Header