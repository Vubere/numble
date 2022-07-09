import React, { useState } from 'react'

function Scorecard() {
  return (
    <div className="scorecard">
      <div className="played">
        0<span>Played</span>
      </div>
      <div>
        0<span>Win%</span>
      </div>
      <div>
        0<span>Current Streak</span>
      </div>
      <div>
        0<span>Max Streak</span>
      </div>
    </div>
  )
}
function GuessDistribution() {
  return (
    <div className="guessDis">
      <h2>GUESS DISTRIBUTION</h2>
      <div className="stats">
        <label htmlFor="range1">1</label>
        <input type="range" name="range1"></input>
        <label htmlFor="range2">2</label>
        <input type="range" name="range2"></input>
        <label htmlFor="range3">3</label>
        <input type="range" name="range3"></input>
        <label htmlFor="range4">4</label>
        <input type="range" name="range4"></input>
        <label htmlFor="range5">5</label>
        <input type="range" name="range5"></input>
        <label htmlFor="range6">6</label>
        <input type="range" name="range6"></input>
      </div>
    </div>
  )
}
export default function Statistics({ setStatOpen }) {
  return (
    <>
      <div className="statistics">
        <div className="toggle">
          <span onClick={() => setStatOpen(false)}>x</span>
        </div>
        <h2>STATISTICS</h2>
        <Scorecard />
        <GuessDistribution />
        <div className="timeShare">
          <div className="timer">
            <h3>NEXT NUMBLE</h3>
            <div>{/*time countdown*/}</div>
          </div>
          <div className="share">{/*share link */}</div>
        </div>
      </div>
    </>
  )
}
