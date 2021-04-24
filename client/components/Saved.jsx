import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function Saved() {
  const { saved, user } = useContext(ThemeContext);

  return (
    <>
      <div className="saved-container">
        <div className="saved-title">
          <h1>
            <span>
              {`${user}'s `}
            </span>
            Saved Equations
          </h1>
          <p>Note: Saved calculations will delete on page refresh</p>
        </div>
        <h1>
          {saved.map((equation) => {
            return (
              <div className="saved-list">
                <div className="text">
                  <p>{`${equation.equation} = ${equation.solution} `}</p>
                </div>
              </div>)
          })}
        </h1>
      </div>
    </>
  )
}
