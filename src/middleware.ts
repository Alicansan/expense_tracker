import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

//THE ERROR

// Error:
// Clerk: The <SignIn/> component is not configured correctly. The most likely reasons for this error are:

// 1. The "/" route is not a catch-all route.
// It is recommended to convert this route to a catch-all route, eg: "//[[...rest]]/page.tsx". Alternatively, you can update the <SignIn/>
// component to use hash-based routing by setting the "routing" prop to "hash".

// 2. The <SignIn/> component is mounted in a catch-all route, but all routes under "/" are protected by the middleware.
// To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are
//  using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "/(.*)".
//  For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
