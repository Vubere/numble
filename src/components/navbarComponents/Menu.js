export default function Menu({setMenuOpen}){

  return(
    <>
      <div className="menuContainer">
        <div className="menu">
          <i className="i cancel"
          onClick={()=>setMenuOpen(false)}></i>
          <h2>Games</h2>
          <h3>MORE FROM VICTOR UBERE</h3>
          <ul>
            <li>
             <div onClick={()=>{
                window.location.assign("https://Vubere.github.io")
              }} className='link'> <i className="i tetrisIcon"></i>Tetrix</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}