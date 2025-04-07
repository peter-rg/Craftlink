// import NextAuth from 'next-auth'
// import authConfig from './auth.config'

// export const { auth: middleware } = NextAuth(authConfig)

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }

import NextAuth from 'next-auth'
import authConfig from './auth.config'

const publicPages = [
  '/',
  '/search',
  '/sign-in',
  '/sign-up',
  '/cart',
  '/cart/(.*)',
  '/product/(.*)',
  '/page/(.*)',
]

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const publicPathnameRegex = RegExp(
    `^(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return
  }

  if (!req.auth) {
    const newUrl = new URL(
      `/sign-in?callbackUrl=${encodeURIComponent(req.nextUrl.pathname) || '/'}`,
      req.nextUrl.origin
    )
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
