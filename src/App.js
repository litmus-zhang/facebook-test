import {ReactComponent as Add} from './icons/Add Circle.svg'
import {ReactComponent as Alert} from './icons/Alert.svg'
import {ReactComponent as Bookmark} from './icons/Bookmark Add.svg'
import {ReactComponent as Briefcase} from './icons/Briefcase Medical.svg'
import { ReactComponent as Camera } from './icons/Camera.svg'
import React ,{useState} from 'react'

function App() {
  return (
    <Navbar>
      <NavItem icon={<Add/>} />
      <NavItem icon={<Alert/>} />
      <NavItem icon={<Bookmark />} />
      <NavItem icon={<Briefcase />}>
<DropdownMenu/>
        </NavItem>
   </Navbar>
  );
}
function DropdownMenu()
{
  function DropdownItem(props)
  {
    return (
      <a className="meu-item" href="#">
        <span className='icon-button'>{props.leftIcon }</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon }</span>
      
      </a>
    )
  }
  <div className='dropdown'>
    <DropdownItem>My Profile</DropdownItem>
    <DropdownItem>
      leftIcon={<Camera />}
      rightIcon={<Bookmark />}


    </DropdownItem>
  </div>
}
function Navbar(props)
{
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}
function NavItem(props)
{
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a className="icon-button" href="#" onClick={() => setOpen(!open)}>{props.icon}</a>
      {open && props.children}
      </li>
  )
}

export default App;
