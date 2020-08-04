import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Title from './components/elements/Title';
import Text from './components/elements/Text';
import Button from './components/elements/Button';

function App() {
  return (
    <div className="App" style={{ marginBottom: 500 }}>
      <Navbar />
      <Hero />
      <Title text="More than just shorter links" />
      <Text>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </Text>
      <div className="section">
        <Button title="Get Started" className="Button" />
      </div>
    </div>
  );
}

export default App;
