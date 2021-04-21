import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ greeting }) {
  return (
    <>
      <div className="header-text">
        <h1 className="title">{greeting.header}</h1>
        <p className="description">{greeting.caption}</p>
      </div>
    </>
  );
}

Header.propTypes = {
  greeting: PropTypes.instanceOf(Object).isRequired,
};
