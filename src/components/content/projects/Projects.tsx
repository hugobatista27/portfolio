import styled from 'styled-components';
import { ContentWidth } from '../../../styles/global-style';
import { ProjectsData } from './ProjectsData';

import CardProject from './Card-Project';

const ProjectsStyle = styled.div``;

export default function Projects() {
    return (
        <ProjectsStyle id='projects'>
            <ContentWidth>
                <h1>Projetos</h1>
                <div>
                    {ProjectsData.map(project => <CardProject projectInfo={project}/>)}
                </div>
            </ContentWidth>
        </ProjectsStyle>
    )
}