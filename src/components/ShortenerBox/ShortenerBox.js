import React, { useState } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import apiRequester from '../../services/apiRequester';
import API from '../../config/contants/api';

const ShortenerBox = () => {
  const [link, setLink] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    apiRequester('POST', `${API.shortener}`, {
      url: link,
    });
  };

  return (
    <div className="ShortenerBox">
      <form className="ShortenerBox__box">
        <Input
          type="url"
          placeholder="Shorten a link here..."
          value={link}
          handleChange={(event) => setLink(event.target.value)}
        />
        <Button title="Shorten it!" handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default ShortenerBox;
