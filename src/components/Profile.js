import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Img from 'gatsby-image';

const AnimatedSection = posed.section({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50,
  },
  closed: { x: '-100%', delay: 300 },
});

const ProfileContainer = styled(AnimatedSection)`
  background-color: #34495e;
  width: 360px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  padding: 50px 25px;
  color: white;

  @media only screen and (max-width: 420px) {
    width: auto;
    max-width: none;
  }
`;

const PhotoPlaceholder = styled.div`
  background-color: #bdc3c7;
  height: 180px;
  width: 180px;
  border-radius: 90px;
  align-self: center;
  margin-bottom: 50px;
`;

const Info = styled.div`
  padding: 0 30px;

  h3,
  h4 {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 420px) {
    h3,
    h3 ~ p {
      text-align: center;
    }
  }
`;

class Profile extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    setTimeout(() => this.showProfile(), 1000);
  }

  showProfile = () =>
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });

  render() {
    const { isOpen } = this.state;
    const { profile } = this.props;
    return (
      <ProfileContainer pose={isOpen ? 'open' : 'closed'}>
        {profile.photo.fluid.src ? (
          <Img
            fluid={profile.photo.fluid}
            style={{ width: 200, marginBottom: 50, alignSelf: 'center' }}
          />
        ) : (
          <PhotoPlaceholder />
        )}

        <Info>
          <h3>{profile.name}</h3>
          <p>{profile.job}</p>
        </Info>

        <Info>
          <h4>Email</h4>
          <p>{profile.email}</p>
        </Info>

        <Info>
          <h4>Github</h4>
          <p>github.com/{profile.github}</p>
        </Info>
      </ProfileContainer>
    );
  }
}

export default Profile;
