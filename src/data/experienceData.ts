export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "STEM Teacher",
    company: "Fusion Academy",
    dates: "10/2023 - Present",
    description: [
      "Led the technology and computer science department as the sole instructor.",
      "Developed and taught a diverse range of courses, including Web Development, Game Design, 3D Modeling, Coding, and Artificial Intelligence.",
      "Mentored students in mathematics, enhancing their analytical and problem-solving skills.",
      "Facilitated extracurricular clubs, including Chess Club and Video Game Club, fostering student engagement and teamwork."
    ]
  },
  {
    title: "Mathnasium Instructor",
    company: "Mathnasium",
    dates: "03/2023 - 10/2023",
    description: [
      "Provided personalized math tutoring to students aged 6 to 18, adapting teaching methods to meet individual learning needs.",
      "Assisted prospective families by answering phone inquiries, effectively communicating program details and enrollment processes.",
      "Fostered a supportive and engaging learning environment to help students build confidence and improve their math skills."
    ]
  }
  ,
  {
    title: "Engineering Aide",
    company: "USDA-ARS ",
    dates: "01/2018 - 04/2020",
    description: [
      "Developed software primarily in Java and XML for a graphical user interface (GUI) application, contributing to enhanced user interaction.",
      "Planned and designed various program aspects, creating weekly progress outlines to ensure project milestones were met.",
      "Prepared and delivered monthly walkthrough demonstrations to superiors, showcasing code progress and functionality of the GUI application through presentations."
    ]
  }

];