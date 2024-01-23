import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/api/interviews", "/api/interviews/[interviewId]","/api/interviewLink/ed1b6eac-84b2-497a-8411-0a941587250e"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
