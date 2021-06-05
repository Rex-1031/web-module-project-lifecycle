import axios from 'axios';
import './App.css';
import React from 'react';
import UserInfo from './components/UserInfo';
import GitStats from './components/GitStats';
import GitSocial from './components/GitSocial';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

const CardDiv = styled.div`
  border: solid 1px black;
  width: 50%;
  margin: auto;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      user: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Rex-1031')
      .then(res =>
        
        {console.log(res.data);
          this.setState({
            ...this.state,
            name: res.data.name,
            userImage: res.data.avatar_url,
            login: res.data.login,
            email: res.data.email,
            company: res.data.company,
            location: res.data.location,
            hireable: res.data.hireable,
            bio: res.data.bio,
            repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following,
            stars: res.data.stars,
            twitter: res.data.twitter_username,
            site: res.data.blog,
            started: res.data.created_at
          }) 
      })
      .catch(err =>{console.log(err)})
  }




  render() { 
    const user= this.state;
    return ( 
      <div className="App">
        <h1>GitHub User</h1>

        <CardDiv>
          <UserInfo 
            name = {user.name}
            img = {user.userImage}
            login ={user.login}
            email ={user.email}
            company ={user.company}
            location ={user.location}
            hireable = {user.hireable}
            bio = {user.bio}
            started = {user.started}
          />
         

          
            <GitStats 
              repos= {user.repos}
              followers ={user.followers}
              following ={user.following}
              stars={user.stars}
            />
          

         
            <GitSocial 
              twitter ={user.twitter}
              site ={user.blog}
            />
         </CardDiv>
        
</div>
       
      );
  }
}
 
export default App;
