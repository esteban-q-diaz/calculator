import React, { useContext } from 'react'
import { ThemeContext } from './App'


export default function Saved () {
  const { saved, user } = useContext(ThemeContext)
  console.log(saved)
  return (
    <>
      <div className="savedContainer">
        <div className="savedTitle">
          <h1><span>{user}'s </span>Saved Equations</h1>
          <p>Note: Saved solutions will delete on page refresh</p>
        </div>
        <h1>{saved.map((equation) => {
          return <div className="savedList">
                <div className="text">
                  <p>{`${equation.equation} = ${equation.solution} `}</p>
                </div>
                </div>
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