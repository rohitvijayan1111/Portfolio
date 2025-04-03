import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define a type for our visibility state
interface VisibilityState {
  [key: string]: boolean;
}

interface ExperienceItem {
  id: number;
  title: string;
  date: string;
  company: string;
  description: string;
  skills: string;
  githubLink?: string;
}

// Styled components
const Container = styled.div`
  color: white;
  font-size:18px;
  min-height: 100vh;
  padding: 2rem;
  font-family: sans-serif;

`;

const TimelineContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
`;

const ParticlesBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
`;

const Title = styled.h2`
  font-size: 4.25rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  
`;

const TimelineWrapper = styled.div`
  position: relative;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #23ce6b; /* Changed to match border color of StyledImage */
  
  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface TimelineItemProps {
  isEven: boolean;
}

const TimelineItemContainer = styled.div<TimelineItemProps>`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: ${props => props.isEven ? 'row' : 'row-reverse'};
  }
`;

const TimelineCircle = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #60a5fa;
  border: 4px solid #2563eb;
  z-index: 10;
  
  @media (min-width: 768px) {
    left: 50%;
  }
`;

interface TimelineCardProps {
  isEven: boolean;
  isVisible: boolean;
}

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-4rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(4rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TimelineCard = styled.div<TimelineCardProps>`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: #2b2b2b; /* Dark background */
  border: 2px solid #23ce6b; /* Neon green border */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px; /* Uniform card size */
  
  @media (min-width: 768px) {
    width: 50%;
    margin-right: ${props => (props.isEven ? '2rem' : '0')};
    margin-left: ${props => (props.isEven ? '0' : '2rem')};
  }

  opacity: ${props => (props.isVisible ? 1 : 0)};
  animation: ${props =>
      props.isVisible ? (props.isEven ? slideInFromLeft : slideInFromRight) : 'none'}
    1s forwards;

  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    background-color: #333333; /* Slightly lighter dark shade on hover */
     border-color: #23ce6b;
    box-shadow: 0px 10px 25px rgba(0, 255, 135, 0.2);
  }
`;



const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 2.25rem;
  font-weight: bold;
  color: #93c5fd;
`;

const GitHubLink = styled.a`
  color: #d1d5db;
  
  &:hover {
    color: white;
  }
`;

const CardSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.span`
  color: #60a5fa;
`;

const DateText = styled.span`
  color: #9ca3af;
`;

const Description = styled.p`
  color: #d1d5db;
  margin-bottom: 0.75rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background-color: #1e3a8a;
  color: #bfdbfe;
  font-size: 1.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const EmptyHalf = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const GitHubIcon = () => (
  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExperienceTimeline = () => {
  const [visible, setVisible] = useState<VisibilityState>({});
  
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Smart India Hackathon 2024 Winner - Problem Statement 1641",
      date: "Dec 2024",
      company: "IIT Tirupati",
      description: "Developed a multilingual web portal integrating data from multiple sources to automate annual report creation with AI-driven content generation, interactive KPIs reducing preparation time from months to minutes (100% reduction).",
      skills: "React, Node.js, Express, MySQL, AI",
      githubLink: "https://github.com/rohitvijayan1111/SIH_PRAGATI_MITRA-24"
    },
    {
      id: 2,
      title: "Website Developer Intern",
      date: "July 2024 - Oct 2024",
      company: "R.M.K. Engineering College",
      description: "Developed and deployed live applications—RMK Connect (academic & administrative platform), RMK StockMate (real-time mess inventory), and RMK IMS (college utilities inventory management)—recording transactions worth lakh/crore daily. Improved operational efficiency by gathering user requirements, building key features, and iterating based on real-time feedback.",
      skills: "React, Node.js, Express, MySQL"
    },
    {
      id: 3,
      title: "Website Developer for Alama International",
      date: "Oct 2024 - Nov 2024",
      company: "Remote",
      description: "Designed and deployed a website to streamline mark entry and result calculation for the 11th ALAMA State Level Competition, reducing process time from hours to seconds (100% reduction)",
      skills: "React, Node.js, Express, MySQL",
      githubLink: "https://github.com/rohitvijayan1111/Alama-Competition"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <Container>
      <TimelineContainer>
        {/* Particles Background Placeholder */}
        <ParticlesBackground id="tsparticles" />
        
        <Title style={{ color: "var(--green)", fontSize :"3rem" }}>Professional Experience</Title>
        
        <TimelineWrapper>
          {/* Vertical line */}
          <VerticalLine />
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItemContainer 
                key={exp.id}
                id={`exp-${exp.id}`}
                className="timeline-item"
                isEven={isEven}
              >
                {/* Circle on timeline */}
                <TimelineCircle />
                
                <TimelineCard 
                  isEven={isEven}
                  isVisible={!!visible[`exp-${exp.id}`]}
                >
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    {exp.githubLink && (
                      <GitHubLink href={exp.githubLink} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                      </GitHubLink>
                    )}
                  </CardHeader>
                  <CardSubHeader>
                    <CompanyName>{exp.company}</CompanyName>
                    <DateText>{exp.date}</DateText>
                  </CardSubHeader>
                  <Description>{exp.description}</Description>
                  <SkillsContainer>
                    {exp.skills.split(', ').map((skill, idx) => (
                      <SkillTag key={idx}>{skill}</SkillTag>
                    ))}
                  </SkillsContainer>
                </TimelineCard>
                <EmptyHalf />
              </TimelineItemContainer>
            );
          })}
        </TimelineWrapper>
      </TimelineContainer>
    </Container>
  );
};

export default ExperienceTimeline;