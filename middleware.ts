import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ["/api/interviews", "/api/resource", "/api/compExam"],
=======
  publicRoutes: ["/api/(.*)"],
>>>>>>> 30eb40cb84d5a561bc6864018b070267dacd0493
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
