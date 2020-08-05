import React from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';

const ShortenerBox = () => {
  return (
    <div className="ShortenerBox">
      <div className="ShortenerBox__box">
        <Input type="text" placeholder="Shorten a link here..." />
        <Button title="Shorten it!" />
      </div>
    </div>
  );
};

export default ShortenerBox;
