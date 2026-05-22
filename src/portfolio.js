/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import React from "react"; // ✅ Needed for JSX inside title

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "", //the text that appears in html tag
  title: (
    <>
      Hi There, I'm <span className="username">Khadija Saeed</span>
    </>
  ),
  subTitle: emoji(
    "A Full Stack and AI Developer experienced in building responsive web applications, intelligent systems, and scalable software solutions using modern technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sB_l9OeH3ZE3lQWK2sJZx59oNmpmVQWe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khadijasaeed683",
  linkedin: "https://www.linkedin.com/in/khadija-saeed-85681329a",
  gmail: "khadijasaeed683@gmail.com",
  gitlab: "https://gitlab.com/Khadija_Saeed1",
  // facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com/qaawish",
  //medium: "https://medium.com",
  //stackoverflow: "https://stackoverflow.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK AND AI DEVELOPER BUILDING MODERN WEB APPLICATIONS, LLM-POWERED SYSTEMS, AND SCALABLE DIGITAL SOLUTIONS",

  skills: [
    emoji(
      "⚡ Build responsive full-stack web applications using React.js, Node.js, MongoDB, Express, and modern JavaScript technologies."
    ),
    emoji(
      "⚡ Develop AI-powered systems, RAG pipelines, and intelligent applications using Python, Hugging Face, and transformer models."
    ),
    emoji(
      "⚡ Design and integrate REST APIs, authentication systems, dashboards, and scalable backend workflows."
    ),
    emoji(
      "⚡ Deploy and manage applications using platforms like Vercel, Hugging Face, GitHub, and cloud-based development tools."
    ),
   
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AI / ML",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "API Integration",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Keep true to show this section
  schools: [
    {
      schoolName: "University of Engineering and Technology (UET), Lahore",
      logo: require("./assets/images/UETlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2023 - 2027",
      desc: "Focused on software development, AI/ML, and database systems with a strong academic record (CGPA: 3.56).",
      descBullets: [
        "Completed 8+ academic and personal projects, including AI, web, and game development.",
        "Active member of multiple societies — Graphic Design Co-Lead at Dev Jirgah and PR Team Lead at Dev Connect."
      ],
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/PGClogo.png"), // You can replace with actual Punjab College logo
      subHeader: "Intermediate in Computer Science (ICS - Physics)",
      duration: "2021 - 2023",
      desc: "Graduated with Grade A+, developing a solid foundation in programming, databases, and problem-solving.",
      descBullets: [
        "Earned Microsoft Office Specialist certification.",
        "Participated in the arrangement of multiple competitions and social events."
      ],
    },
  ],
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show Work Experience Section

  experience: [
    {
      role: "Generative AI Intern",
      company: "National Centre of Artificial Intelligence (NCAI)",
      companylogo: require("./assets/images/ncai.png"),
      date: "January 2026 – March 2026",
      desc: "Worked on Generative AI and Large Language Model based applications focused on solving real-world problems.",
      descBullets: [
        "Contributed to the development and testing of AI-driven solutions and smart applications.",
        "Worked with datasets, AI workflows, and modern AI development practices in a collaborative research environment."
      ]
    },

    {
      role: "Game Developer Intern",
      company: "MLabs",
      companylogo: require("./assets/images/MLABS.png"),
      date: "June 2024 – August 2024",
      desc: "Developed a 3D hyper-casual game 'Froggy’s Fate' using Unity 3D as part of the MLabs Summer Program.",
      descBullets: [
        "Implemented slingshot-based game mechanics, animations, and sound integration.",
        "Collaborated in a fast-paced environment to create engaging gameplay experiences."
      ]
    },

    {
      role: "Freelance Developer & Designer",
      company: "Self-Employed",
      companylogo: require("./assets/images/LinkedInAICertificate.png"),
      date: "March 2021 – Present",
      desc: "Worked on freelance projects related to software development, UI/UX design, databases, and graphic design.",
      descBullets: [
        "Developed responsive web applications and user interfaces using modern development tools.",
        "Built software solutions and design assets for multiple client requirements across different domains."
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",

  projects: [
    {
      image: require("./assets/images/ENLogo4.png"),
      projectName: "EventNest",
      projectDesc:
        "A full-stack MERN web application designed for university society and event management with role-based access, event handling, team management, and admin workflows.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/"
        },
        // {
        //   name: "Live Demo",
        //   url: "https://your-demo-link.com"
        // }
      ]
    },

    {
      image: require("./assets/images/QIR.png"),
      projectName: "Quantum IR Analyzer and Explanator",
      projectDesc:
        "An AI-powered agentic system that extracts complex Quantum IR equations from research documents and explains them in simple language using NLP, LLM workflows, and contextual retrieval techniques.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/khadijasaeed683/QuantumIR_Mathematical_Equations_Explanator"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements, Certifications, Internships and some impactful work that I have done!",

  achievementsCards: [
    {
      title: "Microsoft Office Specialist",
      subtitle:
        "Earned the official Microsoft Office Specialist certification for achieving advanced proficiency in Microsoft Office tools.",
      image: require("./assets/images/MSBadge.png"),
      imageAlt: "MS Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/850910ad-2236-4fec-a263-7cfaa6f5722d/public_url"
        }
      ]
    },

    {
      title: "MLabs Summer Program",
      subtitle:
        "Developed a 3D Unity Game with a slingshot mechanism and successfully completed the MLabs Summer Program.",
      image: require("./assets/images/MLABS.png"),
      imageAlt: "MLabs Logo",
      footerLink: [
        {
          name: "Certificate"
          // url: ""
        }
      ]
    },

    {
      title: "Building AI Products: Security Essentials",
      subtitle:
        "Earned a LinkedIn Learning certification covering AI product security, responsible AI practices, and risk mitigation strategies.",
      image: require("./assets/images/LinkedInAICertificate.png"),
      imageAlt: "AI Logo",
      footerLink: [
        {
          name: "Credentials",
          url:
            "https://www.linkedin.com/learning/certificates/366c10a04c68f6e9f98ae8759727efc4d33a3b3a871c8c74768827cf534617ac?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bho1x3GthTuSO9hHJfwZpFA%3D%3D"
        }
      ]
    },

    {
      title: "Generative AI Internship - NCAI",
      subtitle:
        "Worked as a Generative AI Intern at the National Centre of Artificial Intelligence (NCAI), contributing to AI and Large Language Model based applications.",
      image: require("./assets/images/ncai.png"),
      imageAlt: "NCAI Logo",
      footerLink: [
        {
          name: "Visit NCAI",
          url: "https://ncai.pk/"
        }
      ]
    },

    {
      title: "Google Foundations of Data Science",
      subtitle:
        "Completed Google's Foundations of Data Science certification focused on data analysis, statistics, visualization, and machine learning fundamentals.",
      image: require("./assets/images/googleDataScience.png"),
      imageAlt: "Google Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/"
        }
      ]
    },

    {
      title: "Agile Project Management",
      subtitle:
        "Earned certification in Agile Project Management with knowledge of sprint planning, collaboration workflows, and modern software development practices.",
      image: require("./assets/images/agile.png"),
      imageAlt: "Agile Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.pmi.org/"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's get in touch"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3244241050",
  email_address: "khadijasaeed683@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
