import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname, search, searchParams } = request.nextUrl;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  const redirectTo = (path: string) =>
    NextResponse.redirect(new URL(path, request.url));

  if (isDashboard && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && token) {
    const callbackUrl = searchParams.get('callbackUrl');
    const isSafeInternalPath =
      callbackUrl &&
      callbackUrl.startsWith('/') &&
      !callbackUrl.startsWith('//') &&
      !callbackUrl.startsWith('/login');

    return redirectTo(isSafeInternalPath ? callbackUrl : '/dashboard');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
