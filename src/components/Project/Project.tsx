import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

const ProjectCard = styled.div`
  background-color: #2b2b2b;
  color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 20px rgba(0, 255, 135, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid #23ce6b;
  /* Ensures equal height for all cards */
  min-height: 400px;  /* Adjust this based on content length */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pushes footer down */

  &:hover {
    transform: scale(1.05);
    border-color: #23ce6b;
    box-shadow: 0px 10px 25px rgba(0, 255, 135, 0.2);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 2rem;
    color: #76e5fc;
    font-weight: bold;
  }

  .project-date {
    font-size: 1.5rem;
    color: #a3a3a3;
  }

  p {
    font-size: 1.8rem;
    color: #d1d5db;
    flex-grow: 1; /* Allows content to stretch evenly */
  }

  footer {
    margin-top: auto; /* Pushes the footer to the bottom */
  }
`;


const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  background-color: #1e3a8a;
  color: #bfdbfe;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2563eb;
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

export function Project() {
  return (
    <Container id="project">
      <h2 style={{ color: "var(--green)", fontSize: "3rem" }}>My Projects</h2>
      <ProjectGrid>
      {[
  {
    title: "Smart India Hackathon 2024 Winner - Problem Statement 1641",
    description: "Developed a multilingual web portal integrating data from multiple sources to automate annual report creation with AI-driven content generation, interactive KPIs reducing preparation time from months to minutes (100% reduction).",
    github: "https://github.com/rohitvijayan1111/SIH_PRAGATI_MITRA-24",
    live: "",
    tech: ["React", "Node.js", "Express", "MySQL", "AI"],
    date: "Dec 2024",
    location: "IIT Tirupati"
  },
  {
    title: "Website Developer Intern At R.M.K. Engineering College",
    description: "Developed and deployed live applications—RMK Connect (academic & administrative platform), RMK StockMate (real-time mess inventory), and RMK IMS (college utilities inventory management)—recording transactions worth lakh/crore daily. Improved operational efficiency by gathering user requirements, building key features, and iterating based on real-time feedback.",
    github: "",
    live: "",
    tech: ["React", "Node.js", "Express", "MySQL"],
    date: "July 2024 - Oct 2024",
    location: ""
  },
  {
    title: "Website Developer for Alama International",
    description: "Designed and deployed a website to streamline mark entry and result calculation for the 11th ALAMA State Level Competition, reducing process time from hours to seconds (100% reduction).",
    github: "https://github.com/rohitvijayan1111/Alama-Competition",
    live: "",
    tech: ["React", "Node.js", "Express", "MySQL"],
    date: "Oct 2024 - Nov 2024",
    location: "Remote"
  },
  {
    title: "Seithi360 - Website",
    description: "Developed Seithi360, a feature-rich news aggregator that delivers 100% verified news. Built custom APIs and web scrapers for seamless content aggregation from trusted sources. Enhanced user experience by 25% with multi-language support, personalized updates, and location-based curation, ensuring more accessible and relevant news for diverse audiences.",
    github: "https://github.com/rohitvijayan1111/Seithi-360",
    live: "",
    tech: ["React", "Node.js", "Express", "MySQL", "AI", "Web Scraping"],
    date: "Dec 2024 – Jan 2025"
  },
  {
    title: "RMK CONNECT - Website",
    description: "Developed a web application for academic and administrative management, featuring dashboards, customized forms, attendance tracking, and a hall booking system with approval workflows, improving institutional efficiency by 40% and reducing manual processing time by 60%.",
    github: "https://github.com/rohitvijayan1111/RMK-CONNECT",
    live: "",
    tech: ["React", "Node.js", "Express", "MySQL"],
    date: "June 2024 – Oct 2024"
  },
  {
    title: "RMK STOCK-MATE - Website",
    description: "Developed a web-based stock management application with multi-entry forms, real-time updates, and exportable reports, enabling efficient tracking of purchases and dispatch worth lakhs/crores, while enhancing mess operations and resource management through real-time visibility and data-driven decision-making, improving operational efficiency by 100%.",
    github: "https://github.com/rohitvijayan1111/RMKStockMate",
    live: "",
    tech: ["React", "Bootstrap", "Node.js", "Express", "MySQL"],
    date: "July 2024 – Aug 2024"
  },
  {
    title: "MEDCO - Mobile App",
    description: "Developed an AI-powered healthcare app using Python, Firebase, and Flutter to enhance disease prevention, early detection, and personalized care, addressing challenges in remote areas and enabling doctors to make accurate, data-driven treatment decisions, making remote consultations 100% quicker.",
    github: "https://github.com/rohitvijayan1111/MEDCO",
    live: "",
    tech: ["Flutter", "Firebase", "Machine Learning", "Python"],
    date: "Feb 2024 – March 2024"
  },
  {
    "title": "RRAMS",
    "description": "Developed a software suite introducing innovative features to enhance digital interactions. This project includes a Voice Assistant for hands-free control, a Virtual Keyboard that turns typing into music, and Clap Clap functionality for launching apps with applause, adding a unique level of interactivity to device usage.",
    "github": "https://github.com/rohitvijayan1111/RRAMS",
    "live": "",
    "tech": ["Python and its libraries"],
    "date": "Nov 2021 – Jan 2022"
  }
  
].map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <ProjectCard>
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="Visit GitHub" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <h4 className="project-date">{project.date}</h4>
                <p>{project.description}</p>
              </div>
              <footer>
                <SkillsContainer>
                  {project.tech.map((tech, i) => (
                    <SkillTag key={i}>{tech}</SkillTag>
                  ))}
                </SkillsContainer>
              </footer>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </ProjectGrid>
    </Container>
  );
}

