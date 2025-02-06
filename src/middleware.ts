import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const isLogin = !!request.cookies.get('accessToken')?.value

    if (!isLogin && request.nextUrl.pathname.includes("/cart")){

      return NextResponse.redirect(new URL('/sign-in', request.url)); 
    }
}

export const config = {
  matcher: '/',
};