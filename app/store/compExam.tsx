import {
  CompetitiveExam,
  CompetitiveExamLink,
  InterviewExp,
  Resources,
} from "@prisma/client";
import { create } from "zustand";

interface ResourceStore {
  compExam: CompetitiveExam[];
  addCompetitiveExam: () => Promise<void>;
}

export const useResourceStore = create<ResourceStore>((set) => ({
  compExam: [],
  addCompetitiveExam: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/compExam");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: CompetitiveExam[] = await res.json(); // Corrected: invoke res.json()
      console.log("DATA UPDATED IN ZUSTAND STATE");
      set({
        compExam: data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
