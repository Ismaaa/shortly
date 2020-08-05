import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { shortenLink } from '../../store/ducks/api';

const ShortenerBox = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(shortenLink(link));
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
