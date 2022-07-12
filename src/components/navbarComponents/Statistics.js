import { useSelector } from 'react-redux'
import { resetCol } from '../mainComponents/features/columnRowCounterSlice'
import { resetInput } from '../mainComponents/inputSlice'
import { resetNum } from '../mainComponents/numberSlice'
import { useDispatch } from 'react-redux'

function Scorecard({ played, win, curStreak, maxStreak }) {
  let winPer = win > 0 ? Math.floor((win / played) * 100) : 0
  return (
    <div className="scorecard">
      <div className="played">
        {played}
        <span>Played</span>
      </div>
      <div>
        {winPer}
        <span>Win%</span>
      </div>
      <div>
        {curStreak}
        <span>Current Streak</span>
      </div>
      <div>
        {maxStreak}
        <span>Max Streak</span>
      </div>
    </div>
  )
}
function GuessDistribution({ win, guessDis }) {
  return (
    <div className="guessDis">
      <h2>GUESS DISTRIBUTION</h2>

      {win ? (
        <div className="stats">
          <label htmlFor="range1">
            1<meter id="range1" min="0" max={win} value={guessDis[0]}></meter>
          </label>
          <label htmlFor="range2">
            2<meter id="range2" min="0" max={win} value={guessDis[1]}></meter>
          </label>
          <label htmlFor="range3">
            3<meter id="range3" min="0" max={win} value={guessDis[2]}></meter>
          </label>
          <label htmlFor="range4">
            4<meter id="range4" min="0" max={win} value={guessDis[3]}></meter>
          </label>
          <label htmlFor="range5">
            5<meter id="range5" min="0" max={win} value={guessDis[4]}></meter>
          </label>
          <label htmlFor="range6">
            6<meter id="range6" min="0" max={win} value={guessDis[5]}></meter>
          </label>
        </div>
      ) : (
        'No data'
      )}
    </div>
  )
}
export default function Statistics({ setStatOpen }) {
  const stats = useSelector((state) => state.inputArray.statistics)
  const dispatch = useDispatch()
  const reset = () => {
    dispatch(resetCol())
    dispatch(resetInput())
    dispatch(resetNum())
  }
  return (
    <>
      <div className="statistics">
        <div className="toggle">
          <i
            className="i cancel statIcon"
            onClick={() => setStatOpen(false)}
          ></i>
        </div>
        <h2>STATISTICS</h2>
        <Scorecard
          played={stats.played}
          win={stats.win}
          curStreak={stats.currentStreak}
          maxStreak={stats.maxStreak}
        />
        <GuessDistribution win={stats.win} guessDis={stats.guessDistribution} />
        <div className="anotherRound">
          <h3>Another NUMBLE</h3>
          <div
            className="now link"
            onClick={() => {
              setStatOpen(false)
              reset()
            }}
          >
            Go
          </div>
        </div>
      </div>
    </>
  )
}
