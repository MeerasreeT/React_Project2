import './Navbar.css';
import { useState } from 'react';
import search_icon from '../../assets/search_icon.svg';
import search_icon2 from '../../assets/search-icon2.svg';

const Navbar = () => {
  const [Dropdownlist, setDropdownlist] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { label: 'About', content: 'We are a global company focused on sustainable growth and innovation.' },
    { label: 'Business', content: 'Our business spans multiple sectors including energy, materials, and technology.' },
    { label: 'Sustainability', content: 'We prioritize environmental responsibility and long-term impact.' },
    { label: 'Investors', content: 'Access financial reports, stock info, and investor presentations.' },
    { label: 'Careers', content: 'Join a team that values creativity, integrity, and growth.' },
    { label: 'News and Media', content: 'Explore our latest press releases, media coverage, and updates.' }
  ];

  return (
    <div className="nav-wrapper">
      <div className="nav-top">
        <div className="nav-stock">
          <span className="stock">NSE ₹2,540.50 (0.39%)</span>
          <span className="stock">BSE ₹2,594.50 (0.50%)</span>
        </div>

        <div className="nav-right-buttons">
          <button className="nav-btn">Fraud Alert</button>
          <button className="nav-btn">Contact us</button>
        </div>
      </div>

      <div className="nav-main">
        <div className="nav-title">
          <span className="copter">Copter</span>
          <span className="code">Code</span>
        </div>

        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index} className="nav-dropdown">
              <button
                onClick={() =>
                  setDropdownlist(Dropdownlist === item.label ? null : item.label)
                }
              >
                {item.label}
              </button>
              {Dropdownlist === item.label && (
                <div className="dropdown-box">
                  <p>{item.content}</p>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-search">
          <img
            src={search_icon}
            alt="search"
            className="search-icon"
            onClick={() => setShowSearch(true)}
          />
        </div>
      </div>

      {showSearch && (
        <div className="search-box-overlay">
          <input
            type="text"
            className="search-input"
            placeholder="Search all of Copter..."
            autoFocus
          />
          <button className="search-icon-btn">
            <img src={search_icon2} alt="search" />
          </button>
          <button className="search-close" onClick={() => setShowSearch(false)}>×</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
