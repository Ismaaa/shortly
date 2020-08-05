/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Title from './components/elements/Title';
import Text from './components/elements/Text';
import Button from './components/elements/Button';
import ShortenerBox from './components/ShortenerBox';
import Steps from './components/Steps';
import Subtitle from './components/elements/Subtitle';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App" style={{ marginBottom: 500 }}>
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
      <div className="section">
        <Subtitle text="Advanced Statistics" />
        <p className="Text Text--smaller">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Steps />
      </div>
      <Cta text="Boost your links today" />
    </div>
  );
}

export default App;
