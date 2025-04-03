import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import styled from "styled-components";
import osCertificate from "../../assets/Certificates/OS.jpg";
import AI from "../../assets/Certificates/AI.jpg";
import Blockchain from "../../assets/Certificates/Blockchain and its Applications_page-0001.jpg";
import Enhancing from "../../assets/Certificates/Enhancing Soft Skills and Personality.jpg";
import Alama from "../../assets/Certificates/ALAMA.jpg";
import Ethical from "../../assets/Certificates/Ethical Hacking (1)_page-0001.jpg"
import hack4 from "../../assets/Certificates/Hack2skill-Certificate.png"
import sql from "../../assets/Certificates/hackerrank-sql_page-0001.jpg"
import html from "../../assets/Certificates/HTML-NTRO.jpg"
import idealab from "../../assets/Certificates/IDEA_LAB.jpg"
import python_intro from "../../assets/Certificates/introduction_to_python9b82c-204a-4431-9966-2d17f67b9789.jpg"
import java_intro from "../../assets/Certificates/JAVA-INTRO.jpg"
import js_intro from "../../assets/Certificates/js_cert.jpg"
import paper_present from "../../assets/Certificates/Paper_Presentation.jpg"
import SIH from "../../assets/Certificates/SIH_certificaet_page-0001.jpg"
import rmk_intern from "../../assets/Certificates/Rohit Intern-RMKEC_page-0001.jpg"
import cloud from "../../assets/Certificates/rohit_cloud_cert (1)_page-0001.jpg"
import software_intern from "../../assets/Certificates/software_intern.png"
import java_basic from "../../assets/Certificates/java_basic.png"
import python_basic from "../../assets/Certificates/Python_basics.png"
import infy from "../../assets/Certificates/Rohit Vijayan B Hackinfinity Participation Certificate.png"


// Certificate type definition
type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialURL?: string;
  imageURL: string;
};

    const sampleCertificates = [
    {
        id: 14,
        title: "Smart India Hackathon 2024 Winner",
        issuer: "Ministry of Education & MoE's Innovation Cell",
        date: "DEC 2024",
        category: "Hackathon & Competition",
        credentialURL: "https://drive.google.com/file/d/1nyely9XSOzGXv4GflCcLiVVx0HOvjbhe/view?usp=sharing",
        imageURL: SIH,
    },
    {
        id: 17,
        title: "Cloud Computing",
        issuer: "Infosys",
        date: "SEP 2024",
        category: "Cloud",
        credentialURL: "https://drive.google.com/file/d/1JLiwUUhx07dX1j8CfkA6RpQAyDkBuF1N/view?usp=sharing",
        imageURL: cloud,
    },
    {
        id: 16,
        title: "Web Application Development and Innovation Intern",
        issuer: "AICTE",
        date: "July 2024–Oct 2024",
        category: "Internship & Experience",
        credentialURL: "https://drive.google.com/file/d/1Vjr1B6xdo29PoY5Ai99YSR09KCmusiBq/view?usp=sharing",
        imageURL: rmk_intern,
    },
    {
        id: 2,
        title: "Alama Freelancing",
        issuer: "ALAMA",
        date: "Oct 2024–Nov 2024",
        category: "Internship & Experience",
        credentialURL: "https://drive.google.com/file/d/1U7hEJGboIRuuVqpL_jk1M1at-_uRftP1/view?usp=sharing",
        imageURL: Alama,
    },
    {
        id: 5,
        title: "Ethical Hacking",
        issuer: "NPTEL",
        date: "JULY-OCT 2024",
        category: "Ethical Hacking",
        credentialURL: "https://drive.google.com/file/d/1OhczlaNN0gLswbgxtsluLOo_2jSl1qy9/view?usp=sharing",
        imageURL: Ethical,
    },
    {
        id: 13,
        title: "1st Prize Intra Department Paper Presentation Competition",
        issuer: "R.M.K. Engineering College",
        date: "JULY 2024",
        category: "Hackathon & Competition",
        credentialURL: "https://drive.google.com/file/d/1RSzlU8VlJyqobv-wGQqBdWSmXch2xyZo/view?usp=sharing",
        imageURL: paper_present,
    },
    {
        id: 6,
        title: "Hack4Change",
        issuer: "The Nudge Company & Google",
        date: "AUG 2024",
        category: "Hackathon & Competition",
        credentialURL: "https://drive.google.com/file/d/1BvAVpoW3ma9xa0U6bhZqln4wnXPHC9wY/view?usp=sharing",
        imageURL: hack4,
    },
    {
        id: 15,
        title: "Artificial Intelligence Foundation Certification",
        issuer: "Infosys",
        date: "2024",
        category: "AI",
        credentialURL: "https://drive.google.com/file/d/1-FebwxfkATOhLmrnReJzaqUOMkTRzviQ/view?usp=sharing",
        imageURL: AI,
    },
    {
        id: 18,
        title: "Software Engineering Intern Certification",
        issuer: "HackerRank",
        date: "2024",
        category: "Certification",
        credentialURL: "https://www.hackerrank.com/certificates/c04af2d57fdf",
        imageURL: software_intern,
    },
    {
        id: 19,
        title: "Java Basics",
        issuer: "HackerRank",
        date: "2024",
        category: "Java",
        credentialURL: "https://www.hackerrank.com/certificates/81af95feb054",
        imageURL: java_basic,
    },
    {
        id: 20,
        title: "Python Basics",
        issuer: "HackerRank",
        date: "2024",
        category: "Python",
        credentialURL: "https://www.hackerrank.com/certificates/iframe/1d5b1fee59c4",
        imageURL: python_basic,
    },
    {
        id: 12,
        title: "Introduction to JavaScript",
        issuer: "Sololearn",
        date: "2024",
        category: "JavaScript",
        credentialURL: "https://drive.google.com/file/d/1U5lnZKEz7SDm-2HtnC0iIM3dRMLOUIV8/view?usp=sharing",
        imageURL: js_intro,
    },
    {
        id: 8,
        title: "Introduction to HTML",
        issuer: "Sololearn",
        date: "2024",
        category: "HTML",
        credentialURL: "https://drive.google.com/file/d/1WWK9XMD1Os-LeHKrEVufTyNZATrZrB30/view?usp=sharing",
        imageURL: html,
    },
    {
        id: 7,
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "JAN 2024",
        category: "SQL",
        credentialURL: "https://drive.google.com/file/d/1sTGHyc_Uk0-fuVZoDSMvxBUaeDZvgDwo/view?usp=sharing",
        imageURL: sql,
    },
    {
        id: 3,
        title: "Blockchain and its Applications",
        issuer: "NPTEL",
        date: "JAN-APR 2024",
        category: "Blockchain",
        credentialURL: "https://drive.google.com/file/d/1p-HA0aLc2YVBb4T0FCapMhda_IiyCijR/view?usp=sharing",
        imageURL: Blockchain,
    },
    {
        id: 21,
        title: "HackInfinity Participation Certificate",
        issuer: "SSN",
        date: "DEC 2023",
        category: "Hackathon & Competition",
        credentialURL: "https://drive.google.com/file/d/1agriHqA8wkY5NvOzsFzLy0iFFF-5Ejnf/view?usp=sharing",
        imageURL: infy,
    },
    {
        id: 1,
        title: "Operating System Fundamentals",
        issuer: "NPTEL",
        date: "July-Oct 2023",
        category: "OS",
        credentialURL: "https://drive.google.com/file/d/1pq1GkzYKuQ0DN7ZNIIOpCR2nDjcfQqjZ/view?usp=sharing",
        imageURL: osCertificate,
    },
    {
        id: 9,
        title: "Exploring and Innovating through IDEA Lab",
        issuer: "AICTE",
        date: "MAY-AUG 2023",
        category: "Internship & Experience",
        credentialURL: "https://drive.google.com/file/d/1V8KaxUcco6Cmz3KK2t8w-Hxtv3va5E0m/view?usp=sharing",
        imageURL: idealab,
    },
    {
        id: 4,
        title: "Enhancing Soft Skills and Personality",
        issuer: "NPTEL",
        date: "FEB-APR 2023",
        category: "Soft Skills",
        credentialURL: "https://drive.google.com/file/d/1EQXAYYzZjqDADaPwQ2AV-ArR2e2AQou2/view?usp=sharing",
        imageURL: Enhancing,
    },
    {
        id: 11,
        title: "Introduction to Java",
        issuer: "Sololearn",
        date: "2023",
        category: "Java",
        credentialURL: "https://drive.google.com/file/d/12YM-KC7R1KqRdu0GOY-CQST8bw0dWJv0/view?usp=sharing",
        imageURL: java_intro,
    },
    {
        id: 10,
        title: "Introduction to Python",
        issuer: "Sololearn",
        date: "2023",
        category: "Python",
        credentialURL: "https://drive.google.com/file/d/1OPCo_c_1efOMsd7KJg--agv755UtW9uP/view?usp=sharing",
        imageURL: python_intro,
    }
];



  
const allCategories = ["All", ...Array.from(new Set(sampleCertificates.map(cert => cert.category)))];

const CertificateContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3.8rem;
  font-weight: 700;
    color: var(--green);
  text-align: center;
`;

const CategoryButton = styled.button<{ isSelected: boolean }>`
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  margin-top: 35px;
  margin-right:10px;
  font-size: 1.5rem;
  font-weight: 600;
  background: ${props => (props.isSelected ? "var(--green)" : "#1e1e1e")};
  color: white;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {/* Slightly lighter green */
    color: #39ff14;
    transform: scale(1.05);
  }
`;


const CertificateCard = styled.div`
  background-color: #2b2b2b;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 20px rgba(0, 255, 135, 0.2); /* More noticeable green shadow */
  display: flex;
  flex-direction: column;
  max-width: 350px;

  img {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
  }

  .card-content {
    padding: 1rem;
  }

  h3 {
    font-size: 1.9rem;
    font-weight: 600;
    color: #ffffff;
  }

  .issuer {
    font-size: 1.5rem;
    color: #a3a3a3;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .date {
    font-size: 1.3rem;
    color: var(--green);
    margin-top: 5px;
  }

  .view-link {
    margin-top: 10px;
    font-size: 1.9rem;
    color: var(--green);
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #39ff14; /* Slightly lighter green */
    }
  }
`;


const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function CertificateShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertificates = sampleCertificates.filter(cert => selectedCategory === "All" || cert.category === selectedCategory);

  return (
    <CertificateContainer>
      <Title>My Certifications</Title>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {allCategories.map(category => (
          <CategoryButton key={category} onClick={() => setSelectedCategory(category)} isSelected={selectedCategory === category}>
            {category}
          </CategoryButton>
        ))}
      </div>

      {/* No results message */}
      {filteredCertificates.length === 0 && <p className="text-center text-gray-500">No certificates found.</p>}
    {/* */}
      {/* Grid View */}
      <CertificateGrid>
        {filteredCertificates.map(certificate => (
          <CertificateCard key={certificate.id}>
            <img src={certificate.imageURL}  alt={certificate.title} />
            <div className="card-content">
              <h3>{certificate.title}</h3>
              <p className="issuer"><Award size={16} /> {certificate.issuer}</p>
              <p className="date">{certificate.date}</p>
              {certificate.credentialURL && (
                <a className="view-link" href={certificate.credentialURL} target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLink size={14} />
                </a>
              )}
            </div>
          </CertificateCard>
        ))}
      </CertificateGrid>
    </CertificateContainer>
  );
}
