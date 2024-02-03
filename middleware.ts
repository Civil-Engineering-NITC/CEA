import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ["/api/(.*)"],
=======
  publicRoutes: ["/api/interviews", "/api/resource", "/api/compExam"],
  // publicRoutes: ["/api/(.*)"],
>>>>>>> a60a43da97690c19528c2ed6dc7bd57e9e6a5cfc
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
