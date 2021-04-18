import React, { useContext } from 'react'
import { ThemeContext } from './App'


export default function Saved () {
  const { saved } = useContext(ThemeContext)
  console.log(saved)
  return (
    <>
      <div className="headerText">
        <h1 className="title">{`${saved[0].equation} = ${saved[0].solution}`}</h1>
        <h1>{saved.map((equation) => {
          return <div>
                  <p>{`${equation.equation} = ${equation.solution} `}</p>
                </div>
              })}
        </h1>
      </div>
    </>
  )
}