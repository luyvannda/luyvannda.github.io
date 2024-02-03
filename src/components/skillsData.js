import { calculateExperience } from "../utils/expCalc";

export const skillsData = [
  {
    id: 1,
    name: "HTML",
    experience: calculateExperience("2023-02-01")
  },

  {
    id: 2,
    name: "CSS",
    experience: calculateExperience("2023-02-01")
  },

  {
    id: 3,
    name: "JavaScript",
    experience: calculateExperience("2023-02-01")
  },

  {
    id: 4,
    name: "Accessibility",
    experience: calculateExperience("2023-01-01")
  },

  {
    id: 5,
    name: "React.js",
    experience: calculateExperience("2023-08-01")
  },

  {
    id: 6,
    name: "Sass",
    experience: calculateExperience("2023-08-01")
  },

  {
    id: 7,
    name: "Bootstrap",
    experience: calculateExperience("2023-10-01")
  },

  {
    id: 8,
    name: "Tailwind",
    experience: calculateExperience("2023-12-01")
  },
  {
    id: 9,
    name: "Next.js",
    experience: calculateExperience("2023-12-01")
  },
  {
    id: 10,
    name: "Typescript",
    experience: calculateExperience("2023-12-01")
  }
];
