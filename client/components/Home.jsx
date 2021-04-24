import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './App';
import Header from './Header';

export default function Home() {
  const { setUser } = useContext(ThemeContext);
  const [userName, setUsername] = useState('');

  return (
    <>
      <div className="home-container">
        <Header greeting={{
          header: 'Calculator Application',
          caption: 'Hope you enjoy navigating through this page',
        }}
        />
        <div className="home">
          <h1 className="type-username">Start by choosing a Username</h1>
          <div>
            <input
              type="text"
              placeholder="Type Username"
              className="username-input"
              value={userName}
              onChange={(e) => { setUsername(e.target.value); }}
            />
          </div>

          <Link to="/calculator">
            <input
              type="submit"
              value="Go to Calculator"
              className="startCalc btn"
              onClick={() => { setUser(userName); }}
            />
          </Link>
        </div>
        <div className="home-vid">
          <iframe
            width="870"
            height="489"
            src="https://www.youtube.com/embed/WsxUn0EoZyY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="infoText">
          <p>
            The calculator handles
            <br />
            <span>Multiplication, Division, Addition, and Subtraction.</span>
            <br />
            <br />
            Using
            <br />
            <span>Integers and Decimals.</span>
            <br />
            <br />
            Follows the order of opertaions
            <br />
            <span>Parentheses, Multiplication, Division, Addition, Subtraction (no exponents)</span>
            <br />
            <br />
            <span>Generates accurate results </span>
            <br />
          </p>
          <br />
          <p>
            <span id="span">
              You can collect your calculated  results by saving them!
              <br />
              note: saved
              calculations will be removed when page is refreshed
            </span>
          </p>

        </div>
      </div>
    </>
  );
}
