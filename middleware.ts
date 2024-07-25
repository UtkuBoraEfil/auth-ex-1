export { auth as middleware } from "@/auth"


// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "@/app/lib/session";
// import { cookies } from "next/headers";

// // 1. Specify protected and public routes
// const protectedRoutes = ["/dashboard"];
// const publicRoutes = ["/login", "/signup", "/"];

// export default async function middleware(req: NextRequest) {
//   try {
//     // 2. Check if the current route is protected or public
//     const path = req.nextUrl.pathname;
//     const isProtectedRoute = protectedRoutes.includes(path);
//     const isPublicRoute = publicRoutes.includes(path);

//     // 3. Decrypt the session from the cookie

//     if (isProtectedRoute) {
//       const cookie = cookies().get("session")?.value;
//       const session = await decrypt(cookie);

//       const url = new URL("/login", req.nextUrl);
//       console.log("MIDDLEWARE URL", url);
//       // check if expired
//       if (session && new Date(session?.expiresAt) < new Date()) {
//         return NextResponse.redirect("http://localhost:3000/login");
//       }

//       if (!session?.userId) {
//         return NextResponse.redirect("http://localhost:3000/login");
//       }

//       return NextResponse.next();
//     }
//     const cookie = cookies().get("session")?.value;
//     const session = await decrypt(cookie);
    
//     if (
//       isPublicRoute &&
//       session?.userId &&
//       !req.nextUrl.pathname.startsWith("/dashboard")
//     ) {
//       return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//     }
    
//     return NextResponse.next();
//   } catch (error) {
//     console.error(`Error from middleware: ${error}`);
//     return NextResponse.next();
//   }
// }



//burdan asagisi kapaliydi

    // // 4. Redirect
    // if (isProtectedRoute && !session?.userId) {
    //   return NextResponse.redirect(new URL("/login", req.nextUrl));
    // }

    // console.log("MIDDLEWARE ", session);
    // console.log("MIDDLEWARE ", session?.expiresAt);
    // // check if expired
    // if (session && new Date(session?.expiresAt) < new Date()) {
    //   console.log("im here");
    //   return NextResponse.redirect(new URL("/login", req.nextUrl));
    // }