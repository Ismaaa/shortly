import React from 'react';
import links from './links.json';

const Footer = () => {
  const renderLinks = () =>
    Object.values(links).map((link) => (
      <div key={link.title} className="Footer__linkGroup">
        <h1 className="Footer__linkTitle">{link.title}</h1>
        <div className="Footer__linkChildren">
          {link.items.map((item) => (
            <span key={item} className="Footer__linkSubItem">
              {item}
            </span>
          ))}
        </div>
      </div>
    ));

  return (
    <footer className="Footer">
      <img src="/assets/logo-white.svg" alt="Logo" className="Footer__logo" />
      {renderLinks()}
      <div className="Footer__socialLinks">
        <img src="/assets/icon-facebook.svg" alt="Facebook" />
        <img src="/assets/icon-twitter.svg" alt="Twitter" />
        <img src="/assets/icon-pinterest.svg" alt="Pinterest" />
        <img src="/assets/icon-instagram.svg" alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
