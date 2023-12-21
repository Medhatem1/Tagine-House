import { NavLink } from "react-router-dom"
export default function Header() {
  return (
    <div className="nav"> 
      <h1 className="noun"><a href="http://localhost:3000/">TagineHouse</a></h1>
      <nav >
        <div className="op">
    <NavLink to="/" exact activeClassName="active" className="navlink"><div className="oo">
      Home</div>
    </NavLink>
    <NavLink to="/about" activeClassName="active" className="navlink">
    <div className="oo">
      About</div>
    </NavLink>
    <NavLink to="/contact" activeClassName="active" className="navlink">
    <div className="oo">
      Contact</div>
    </NavLink>
    <NavLink to="/menu" activeClassName="active" className="navlink">
    <div className="oo">
      Menu</div>
    </NavLink>
    <NavLink to="/reservation" activeClassName="active" className="navlinka"><div className="oo">
      Reservation</div></NavLink>
      </div>
  </nav>
  </div>
  )
}
