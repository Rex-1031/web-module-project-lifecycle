import React from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-around;
   align-items: flex-start;

`;

const StatsDiv = styled.div`
    width: 75%;
    padding: 10px;
    text-align: left;
   
`;

const ImageDiv = styled.div`
    padding: 10px;
`;

const Avatar = styled.img`
    width: 100%;
`;

const Bio = styled.div`
    margin: 0;
    padding: 0 20px;
    text-align: left;
    

`;


const UserInfo = props => {
        return ( 
            <div>
            <InfoContainer>
                <ImageDiv>
                    <Avatar src={props.img} />
                </ImageDiv>

                <StatsDiv>
                    <p><b>Name:</b><br/>{props.name}</p>

                    <p><b>GitHub UserName:</b><br/>{props.login}</p>

                    <p><b>Location:</b><br/>{props.location} </p>

                    <p><b>Company:</b><br/>{props.company} </p>

                    <p><b>Started on:</b><br/><em>{props.started}</em></p>
                </StatsDiv>
               
            </InfoContainer> 
            <Bio>
                <p><b>Bio:</b><br/>{props.bio}</p>
            </Bio>
            </div>
        );
    }

export default UserInfo;