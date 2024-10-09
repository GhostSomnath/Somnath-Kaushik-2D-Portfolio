import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a talent for creating robust and scalable web applications.
Through valuable internships at Assert Infotech and Fusiotech, I have sharpened my expertise in front-end technologies like React and Vite, as well as back-end frameworks such as Node.js, MongoDB, and Express.js.
My aim is to harness my skills in HTML, CSS, Tailwind CSS, JavaScript, and more to develop innovative solutions that drive business growth and enhance user experiences.
With a strong problem-solving mindset demonstrated by over 400 challenges solved on Leetcode, I am eager to contribute to impactful roles in esteemed organizations, always ready to learn and push the boundaries of innovation.`;



export const ABOUT_TEXT = `I am an innovative full stack developer with a passion for crafting seamless and intuitive web applications. \n\n My journey began with an insatiable curiosity about technology, evolving into a fulfilling career where I thrive on tackling challenges and expanding my skill set. \n\n With hands-on experience from impactful internships at Assert Infotech and Fusiotech, I have mastered modern frameworks and technologies like React.js, Vite, Node.js, Express.js, and MongoDB.\n\n Proficient in HTML, CSS, Tailwind CSS, and JavaScript, I create robust solutions that drive business growth and enhance user experiences.\n\n I flourish in collaborative environments, constantly exploring emerging technologies and contributing to open-source projects, embodying my commitment to lifelong learning and community engagement.\n\n I am eager to leverage my expertise to drive innovation and excellence in high-impact roles.`;


export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "MERN Developer Intern",
    company: "Fusiotech",
    description: `Leading the development of an innovative, fully responsive website equipped with comprehensive admin controls. Implementing real-time notification systems through email to optimize user interaction and streamline communication. Actively contributing to a seamless user experience by integrating modern design and backend functionalities.`,
    technologies: ["MongoDB", "Express", "React Vite", "Node.js", "Tailwind"]
  },
  {
    year: "May 2023 - June 2024",
    role: "President",
    company: "Coding Blocks Club GLA",
    description: `Orchestrating multiple high-impact tech events, coding competitions, and workshops aimed at advancing students' technical prowess. Committed to fostering a thriving coding culture within the campus, driving engagement, and encouraging innovation among peers.`,
    technologies: ["Leadership", "Event Management", "Organizational Skills"]
  },
  {
    year: "May 2023 - August 2023",
    role: "Front-end Web Developer Intern",
    company: "Assert Infotech",
    description: `Developed and refined visually appealing, user-friendly templates for internal company projects. Leveraged cutting-edge technologies including React to create scalable web solutions, while enhancing expertise in HTML, CSS, and JavaScript. Collaborated within a dynamic team environment to push forward creative ideas.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "React Vite"]
  }
];

export const PROJECTS = [
  {
    title: "Fusiotech  Website",
    image: project1,
    description:
      "Developing a fully responsive website equipped with comprehensive admin controls. Implementing real-time notification systems through email to optimize user interaction and streamline communication. Actively contributing to a seamless user experience by integrating modern design and backend functionalities.",
    technologies: ["MongoDB", "Express", "React Vite", "Node.js", "Tailwind", "Framer Motion"],
    link: "https://www.fusiotech.in",
  },
  {
    title: "GitHub Analytic Dashboard",
    image: project2,
    description:
      "A comprehensive tool for searching GitHub accounts and analyzing repositories. Users can sort repositories by name, stars, forks, and open issues. The dashboard provides detailed insights on contributions, profiles, repo details, commits, and open issues, offering a robust view of repository activity and developer profiles.",
    technologies: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "GitHub API"],
    link: "https://github-analytic-dashboard.onrender.com/",
},

{
  title: "Learning Heaven Website",
  image: project3,
  description:
    "A feature-rich e-learning portal and e-commerce platform that provides subjective notes, course enrollment, downloadable study materials, tech blogs, job alerts, and learning products. The platform also integrates a code compiler for practical learning, enhancing the user experience.",
  technologies: ["EJS", "MongoDB", "Tailwind", "Node.js", "JavaScript", "CSS"],
  link: "https://learning-heaven.onrender.com/",
},

{
  title: "Health Support Website",
  image: project4,
  description:
    "A comprehensive health support platform offering personalized health guidance, health checkup enrollment, downloadable resources, live interactions with doctors, and a range of health-related products.",
  technologies: ["EJS", "Tailwind", "Node.js", "MongoDB"],
  link: "https://health-support.onrender.com/",
},

{
  title: "Coding Blocks Club Website",
  image: project5,
  description:
    "A responsive website representing the Coding Blocks club. Students can book event tickets, access learning resources, code in the online compiler, and submit their queries.",
  technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "Node.js"],
  link: "https://coding-blocks-glau-web-project.onrender.com/",
},

{
  title: "Madan Mohan Kalawati School, Mathura Website - (In Progress)",
  image: project6,
  description: "A front-end school website that enhances communication and accessibility, fostering community engagement and improving user experience.",
  technologies: ["HTML", "CSS", "JS"],
  link: ""
},
{
  title: "Portfolio Website",
  image: project7,
  description: "A platform to showcase my professional journey, featuring sections to share my experiences, projects, and ways to contact me.",
  technologies: ["React.js", "Tailwind", "Framer Motion"],
  link: "https://somnath-kaushik-2d-portfolio-r2f4.onrender.com/"
},
{
  title: "3D Portfolio Website (Copied from github)",
  image: project8,
  description: "A 3D platform to showcase my professional journey, featuring sections to share my experiences, projects, and ways to contact me.(I have picked its code from github)",
  technologies: ["React.js", "Three.js"],
  link: "https://somnath-kaushik-portfolio-1.onrender.com/3d-portfolio/"
}

];

export const CONTACT = {
  address: "Mathura",
  phoneNo: "+91 9068218282 ",
  email: "somnath.21.kaushik@gmail.com",
};
