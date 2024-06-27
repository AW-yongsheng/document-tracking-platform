import { NextRequest, NextResponse } from 'next/server';
import { CONSTANTS } from './commons';

const middleware = (request: NextRequest) => {
  const user = request.cookies.get(CONSTANTS.USER);
  const isValidLoggedIn = !!user?.value;
  const { pathname } = request?.nextUrl || {};
  const PUBLIC_ROUTES = [`/login`];

  if (!isValidLoggedIn && !PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }

  if (isValidLoggedIn && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    `/((?!api|_next/static|_next/image).*)`,
  ],
};

export default middleware;
