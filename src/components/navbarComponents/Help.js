export default function Help({setHelpOpen}) {
  return (
    <>
      <div className="help-container">
        <div className="help">
          <h2>HOW TO PLAY</h2>
          <span onClick={setHelpOpen}>x</span>
          <p>Guess the number in six tries.</p>
          <p>
            If your guess is lesser you get a red border on the row. if it is greater you get
            a white border.
          </p>
          <p>
            After each guess the color of the tile will change to show how close
            you are.
          </p>
          <ul>
            <li>Yellow if the digit is in the number but in the wrong spot</li>
            <li>Green if digit is in number and in the right spot</li>
          </ul>
        </div>
      </div>
    </>
  )
}
