import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../elements/Button';
import Input from '../elements/Input';
import API from '../../config/contants/api';
import { apiRequest } from '../../store/ducks/api';

const ShortenerBox = () => {
  const [link, setLink] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      apiRequest('POST', `${API.shortener}`, {
        url: link,
      }),
    );
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
