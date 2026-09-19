import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../data/navigation'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="topbar" data-testid="navbar">
      <div className="brand-block" data-testid="navbar-brand-block">
        <button type="button" className="brand" onClick={() => navigate('/')} data-testid="navbar-brand">
          Chonlatree Ketkorwoing
        </button>
      </div>

      <select
        className="mobile-nav"
        value={location.pathname}
        onChange={(event) => navigate(event.target.value)}
        aria-label="Navigation"
        data-testid="navbar-mobile-select"
      >
        {navItems.map((item) => (
          <option key={item.to} value={item.to} data-testid={`navbar-mobile-option-${item.to.slice(1) || 'home'}`}>
            {item.label}
          </option>
        ))}
      </select>

      <nav className="desktop-nav" aria-label="Main navigation" data-testid="navbar-desktop-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            data-testid={`navbar-link-${item.to.slice(1) || 'home'}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
