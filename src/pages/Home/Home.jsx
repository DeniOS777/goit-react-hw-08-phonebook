import React from 'react';
import { Helmet } from 'react-helmet';
import { WrapTitle, HomePageTitle } from './Home.styled';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <WrapTitle>
        <HomePageTitle>
          Welcom to your personal phonebook application. Let's go adding your
          the first contact. It will be interesting.
        </HomePageTitle>
      </WrapTitle>
    </>
  );
};

export default Home;
