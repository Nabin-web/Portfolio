import { useState } from 'react';
import { CareerItem } from '../components/careerItems';
import { Terminal } from '../components/terminals';

export function Career() {
    const [expanded, setExpand] = useState(false)
  const careerData = [
    {
      role: "Frontend Engineer",
      company: "Rara Digital Labs",
      location: "Manbhawan, Lalitpur",
      period: "Jul 2024 - Present",
      achievements: [
        "Assisted in managing accounting operations, invoicing, and financial reporting",
        "Familiar with inventory management, IRD integration, and POS systems",
        "Proficient in utilizing accounting tools to streamline business processes and ensure compliance with financial regulations,improving accuracy and eficiency in financial tasks.",
        "Experience generating financial reports and handling tax documentation for compliance.",
        "Developed workflows to automate invoicing and billing, reducing manual entry errors and saving time.",
        "Migrated Tigg application CRA to vite"
      ],
      skills: ["AWS", "React", "Docker", "CI/CD"]
    },
    {
      role: "Mid-level React Developer",
      company: "Waft Technology",
      location: "Jwagal, lalitpur",
      period: "Mar 2023 - Jun 2024",
      achievements: [
        "Integration of user behavior analytics tool (Microsoft Clarity and Google Analytics)",
        "Skilled in utilizing UI component libraries such as Mantine UI and Chakra UI to enhance user interface design and development Created modules on backend Framework (Node JS)",
        "Experienced in integrating diverse payment gateways, both domestic and international, to enable secure online transactions within web applications (Acleda Bank Pay, khalti, and eSewa)",
        "Refactoring the React project into various versions to optimize performance.",
        "Converting clients' business requirement documents into project shipment schedules by dividing them into epics and tickets for streamlined implementation and monitoring"

      ],
      skills: ["AWS-S3", "Microsoft Clarity", "Mantine UI", "Chakra UI", "Agile", "Google Analytics"]
    },

    {
        role: "Mid-level React Developer | EXL (Resource outsource from Wafttech)) ",
        company: "EXL",
        location: "Remote",
        period: "Jul 2023 - Dec 2023",
        achievements: [
          "Designed and implemented the frontend interface using React.js, allowing users to upload PDF documents and submit search queries relating to the document uploaded",
          "Proficient in uploading les to AWS S3 for le management",   
          "Engaging in discussions after client meetings to thoroughly analyze task division and establish appropriate time constraints based on their requirements",
          "Successfully delivered the demo project within the specified timeline, meeting all functional requirements",
          "Engaged in multiple projects, effectively maintaining codebase to meet project requirements."
  
        ],
        skills: ["AWS-S3", "Microsoft Clarity", "Mantine UI", "Chakra UI", "Agile"]
      },

      {
        role: "Junior React Developer",
        company: "Waft Technology",
        location: "Jwagal lalitpur",
        period: "Mar 2022 - Mar 2023",
        achievements: [
          "Building reusable components on React",
          "Worked as front-end developing product in Next Js 13 (Waft-commerce, Opendatafabric) and (io-fund) in Next js 12 for SSR",
          "Proficient in Tailwind CSS and Bootstrap for efficient and responsive styling of web applications",
          "Experienced in state management using Redux and Redux Saga, as well as leveraging Redux Toolkit for streamlined development workflows."

  
        ],
        skills: ["Tailwind css", "Next Js", "Git", "Redux", "Bootstrap", ]
      },

      {
        role: "Internship - React Developer",
        company: "Axios Softwork",
        location: "Jwagal lalitpur",
        period: "Mar 2022 - Mar 2023",
        achievements: [
          "Worked as a React developer intern where I worked on their Customer Relation Management project (Axios CRM)",
          "Worked as a team for Agile product development",
          "Designed a responsive website with greater user experience using React JS, Sass, Next JS",
            "Worked with React useContext Hooks for Global State Management."
  
        ],
        skills: ["React", "Sass", "Context API" ]
      },

    {
      role: "Bsc.(hons) in Computing Kathmandu",
      company: "Softwaric College of IT and E-commerce affiliated to Coventry University",
      location: "Maitidevi, Kathmandu",
      period: "Graduated Nov 2021",
      skills: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "React JS", "Python", "Node", "Kotlin", "Figma"]
    }
  ];

  return (
    <>
    <div className=" text-2xl font-bold text-white mb-8 text-center">Career</div>   
     <Terminal title="career.json" setExpand={setExpand} expanded={expanded}>
        <div className={`space-y-6 transition-all duration-500 ${expanded?' max-h-[1500px]':'max-h-80'}`}>
            {careerData.map((item, index) => (
            <CareerItem key={index} {...item} />
            ))}
        </div>
     </Terminal>
    </>

  );
}