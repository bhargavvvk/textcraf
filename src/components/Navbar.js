import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  const [isChecked, setIsChecked] = useState(false);

const handleSwitchChange = (event) => {
  const checked = event.target.checked;
  setIsChecked(checked);
  props.toggleMode(); // Toggles the theme
};

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TextCraft</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <li className="nav-item align-items-center d-flex" >
      <i className={`fas fa-sun text-${props.mode === 'light' ? 'dark' : 'white'}`}></i>
<div className="ms-2 form-check form-switch">
  <input
    className={`form-check-input border-${props.mode === 'light' ? 'dark' : 'light'}`}
    style={{
      backgroundColor: isChecked ? 'grey' : 'grey', // Always set to grey
    }}
    onChange={handleSwitchChange}
    type="checkbox"
    role="switch"
    id="themingSwitcher"
  />
</div>
<i className={`fas fa-moon text-${props.mode === 'light' ? 'dark' : 'white'}`}></i>

      </li>
    </div>

  </div>
</nav>
  )
}
