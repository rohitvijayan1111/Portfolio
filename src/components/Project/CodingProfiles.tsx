import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;   
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: 600px; /* Ensuring same width */
  height: auto; /* Maintaining aspect ratio */
  border-radius: 10px;
  border: 2px solid #23ce6b;
  background-color:rgb(0, 0, 0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function CodingProfiles() {
  return (
    <StatsContainer>
      <h2 style={{ color: "var(--green)", fontSize :"3rem" }}>My Coding Stats</h2>
      <ImageContainer>
      <StyledImage
          src="https://leetcard.jacoblin.cool/rohitvijayan1111?theme=dark"
          alt="LeetCode Stats"
          width="700"
          height="400"
        />
        <StyledImage
          src="https://gfgstatscard.vercel.app/rohitvijayan1111"
          alt="GFG stats"
        />
      </ImageContainer>
    </StatsContainer>
  );
}

export default CodingProfiles;
