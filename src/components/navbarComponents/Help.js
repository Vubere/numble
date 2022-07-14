export default function Help({ setHelpOpen }) {
  return (
    <>
      <div className="helpContainer">
        <div className="help">
          <h2>HOW TO PLAY</h2>
          <i className="i cancel" onClick={() => setHelpOpen(false)}></i>
          <p>
            Guess the number in six tries.
            You are to try guess a number up of five unique digits. 
          </p>
          <p>
            If your guess is lesser you get a white border on the row. if it is
            greater you get a red border.
          </p>
          <p>
            After each guess the color of each tile on the row will change to show how close
            you are.
          </p>
          <p>Yellow if the digit is in the number but in the wrong spot</p>
          <p>Green if digit is in number and in the right spot</p>
        </div>
      </div>
    </>
  )
}
