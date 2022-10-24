import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
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
          <GiRotaryPhone size="96" />
        </HomePageTitle>
      </WrapTitle>
    </>
  );
};

export default Home;
