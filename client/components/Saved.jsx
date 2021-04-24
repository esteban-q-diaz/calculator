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
        <h1 className="floating">+</h1>
        <h1 className="floating2">+</h1>
        <h1 className="floating3">+</h1>
        <h1 className="floating4">+</h1>
        <h1 className="floating5">+</h1>
        <h1 className="floating6">+</h1>
      </div>
    </>
  )
}
