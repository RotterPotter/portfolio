import './Navbar.css'

export default function Navbar () {
  return(
    < div >
      <div className='navbar-wrapper'>
        <div className='logo'>Logo</div>
        <ul className='nav-links'>
          <li>About me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li className='contact-me'>Contact me</li>
        </ul>
        
      </div>
    </div>
  );
}