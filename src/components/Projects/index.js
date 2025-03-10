import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from CAD designs to 3D modeling. Here are some of my projects using CREO, CATIA V5, and AutoCAD.
        </Desc>

        {/* Toggle Buttons for Filtering */}
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'CREO'} onClick={() => setToggle('CREO')}>CREO</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'AUTO CAD'} onClick={() => setToggle('AUTO CAD')}>AUTO CAD</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'CATIA - V5'} onClick={() => setToggle('CATIA - V5')}>CATIA - V5</ToggleButton>
        </ToggleButtonGroup>

        {/* Displaying Project Cards */}
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || project.category === toggle)
            .map((project, index) => (
              <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
