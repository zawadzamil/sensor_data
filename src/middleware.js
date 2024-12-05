import {NextResponse} from 'next/server';
import {ADMIN_PATH, LOGIN_PATH, PATH_MY_TESTS} from '@/helpers/Slugs';
import {
    ACCESS_TOKEN,
    openRoutes,
    SECURED_SESSION_TOKEN_KEY,
    SESSION_TOKEN_KEY,
} from './helpers/constant';

// export default function middleware(req) {

//     const url = req.nextUrl;

//     let tokenKey = SESSION_TOKEN_KEY;

//     if (url.origin.startsWith("https://")) {
//         tokenKey = SECURED_SESSION_TOKEN_KEY;
//     }

//     const session = req.cookies.get(tokenKey);

//     if (!session && url.pathname.startsWith(ADMIN_PATH)) {
//         return NextResponse.redirect(`${url.origin}${LOGIN_PATH}`);
//     }

// }

// You can add any paths that should be accessible without authentication

export async function middleware(request) {
    const {pathname} = request.nextUrl;
    // Check if the pathname is in the open routes
    if (openRoutes.includes(pathname)) {
        return NextResponse.next();
    }
    // For all other routes, check for authentication
    const token = request.cookies.get(ACCESS_TOKEN);
    if (token) {
        // User is authenticated, allow the request to proceed
        return NextResponse.next();
    } else {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }
}

// Add any routes that you want the middleware to run on
// Use '/' to run the middleware on all routes
export const config = {
    // matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',],
matcher: []
};
