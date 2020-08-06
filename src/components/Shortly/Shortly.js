/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Title from '../elements/Title';
import Text from '../elements/Text';
import Button from '../elements/Button';
import ShortenerBox from '../ShortenerBox';
import Subtitle from '../elements/Subtitle';
import Steps from '../Steps';
import Cta from '../Cta';
import Footer from '../Footer';
import LinksList from '../LinksList';

function Shortly() {
  return (
    <div className="Shortly">
      <div className="heading">
        <Navbar />
        <Hero />
        <Title text="More than just shorter links" />
        <Text>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Text>
        <div className="section">
          <Button title="Get Started" rounded />
        </div>
      </div>
      <ShortenerBox />
      {/* <LinksList /> */}
      <div className="section">
        <Subtitle text="Advanced Statistics" />
        <p className="Text Text--smaller">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Steps />
      </div>
      <Cta text="Boost your links today" />
      <Footer />
    </div>
  );
}

export default Shortly;
