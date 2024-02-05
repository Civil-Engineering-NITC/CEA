import { InterviewExp } from "@prisma/client";
import { create } from "zustand";

interface InterviewStore {
  interviews: InterviewExp[];
  twoInterviews: InterviewExp[];
  addInterviews: () => Promise<void>;
}

export const useInterviewStore = create<InterviewStore>((set) => ({
  interviews: [],
  twoInterviews: [],
  addInterviews: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/interviews");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: InterviewExp[] = await res.json(); // Corrected: invoke res.json()
      var sortedInterviews = data.sort(
        (a: any, b: any) => parseFloat(b.package) - parseFloat(a.package)
      );

      var sortedTwoInterviews = sortedInterviews.slice(0, 2);

      set({
        interviews: sortedInterviews,
        twoInterviews: sortedTwoInterviews,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
