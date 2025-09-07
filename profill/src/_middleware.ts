import { NextRequest, NextResponse } from 'next/server'

export const middleware = async(request:NextRequest) => {
  const pathName = request.nextUrl.pathname;
  const userId = Number(pathName.split('/')[2]);

  if (userId) {
    return NextResponse.next();
  } else {
    return 
  }
}

export const config = {
  matcher: ['/signIn',]
}