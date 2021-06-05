import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const SocialDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

`;

const GitSocial = props => {
    return ( 
        <SocialDiv>
            <FontAwesomeIcon icon={['fab','twitter']} />
            <FontAwesomeIcon icon={['fab','github']} />
            <FontAwesomeIcon icon={['fab','blogger-b']} />
            <FontAwesomeIcon icon="envelope" />
        </SocialDiv>
    );
}

export default GitSocial;