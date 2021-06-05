import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0 10px 0;

`;
const StatsContainer = styled.div`
    width: 30%;
`;

const GitStats = props => {
    
    
        return ( 
            <Container>
                <StatsContainer>
                    <h4>Repos:<br/>{props.repos}</h4>
                </StatsContainer>
                <StatsContainer>
                    <h4>Followers:<br/>{props.followers}</h4>
                    
                </StatsContainer>
                <StatsContainer>
                    <h4>Following:<br/>{props.following}</h4>
                    
                </StatsContainer>
            </Container>
        );

}

export default GitStats;