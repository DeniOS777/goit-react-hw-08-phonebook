import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { Helmet } from 'react-helmet';
import { Container, HomePageTitle } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HomePageTitle>
        Welcom 🙋‍♀️ to your personal phonebook application. Let's go adding your
        the first contact. It will be interesting 😉
        <GiRotaryPhone />
      </HomePageTitle>
    </Container>
  );
};

export default Home;
