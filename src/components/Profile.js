import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

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

const Description = styled.p`
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  max-width: 350px;
  line-height: 1.25;
  color: #757575;
`;

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <ProfileContainer>
        <p style={{ marginTop: 135, marginBottom: 10 }}>Hey, my name is</p>
        <h1 style={{ marginBottom: 20 }}>Diogo Oliveira</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec augue mattis, placerat mauris sed, sagittis urna.
        </Description>
        <button
          style={{
            width: 120,
            height: 40,
            borderRadius: 24,
            border: '1px solid #235bc5',
            color: '#235bc5',
            marginBottom: 40,
          }}
        >
          Contact me!
        </button>
        {profile.photo.fluid.src ? (
          <Img
            fluid={profile.photo.fluid}
            style={{ width: 200, marginBottom: 50 }}
          />
        ) : (
          <PhotoPlaceholder />
        )}

        {/* <Info>
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
        </Info> */}
      </ProfileContainer>
    );
  }
}

export default Profile;
