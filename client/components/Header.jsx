import React from 'react';

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
