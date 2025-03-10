import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I have worked on a wide range of projects, from CAD designs to 3D modeling. Here are some of my projects using CREO, CATIA V5, and AutoCAD.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'CREO' ?
            <ToggleButton active value="CREO" onClick={() => setToggle('web app')}>CREO</ToggleButton>
            :
            <ToggleButton value="CREO" onClick={() => setToggle('web app')}>CREO</ToggleButton>
          }
          <Divider />
          {toggle === 'AUTO CAD' ?
            <ToggleButton active value="AUTO CAD" onClick={() => setToggle('AUTO CAD')}>AUTO CAD</ToggleButton>
            :
            <ToggleButton value="AUTO CAD" onClick={() => setToggle('AUTO CAD')}>AUTO CAD</ToggleButton>
          }
          <Divider />
          {toggle === 'CATIA - V5' ?
            <ToggleButton active value="CATIA - V5" onClick={() => setToggle('CATIA - V5')}>CATIA - V5</ToggleButton>
            :
            <ToggleButton value="CATIA - V5" onClick={() => setToggle('CATIA - V5')}>CATIA - V5</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects


