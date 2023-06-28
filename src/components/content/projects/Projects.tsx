import styled from 'styled-components';
import { useState } from 'react';

import { ContentWidth } from '../../../styles/global-style';
import { ProjectsData } from './ProjectsData';

import CardProject from './Card-Project';

const ProjectsStyle = styled.div`
    padding: 20px 0;
    position: relative;

    h1 {
        font-size: 60px;
        margin-bottom: 32px;
    }
`;

export default function Projects() {
    const [showImages, setShowImages] = useState<string | null>('');

    return (
        <ProjectsStyle id='projects'>
            <ContentWidth>
                <h1>Projetos</h1>
                <div>
                    {ProjectsData.map(project => <CardProject projectInfo={project} showImages={showImages} setShowImages={setShowImages}/>)}
                </div>
            </ContentWidth>
        </ProjectsStyle>
    )
}