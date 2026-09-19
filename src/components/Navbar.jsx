import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../data/navigation'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink px-5 py-4 text-white shadow-lg shadow-slate-950/10" data-testid="navbar">
      <div className="brand-block" data-testid="navbar-brand-block">
        <button type="button" className="cursor-pointer border-0 bg-transparent p-0 font-display text-base font-semibold tracking-tight text-white transition-colors hover:text-orange-300" onClick={() => navigate('/')} data-testid="navbar-brand">
          Chonlatree Ketkorwoing
        </button>
      </div>

      <select
        className="block rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-orange-300 md:hidden"
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

      <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation" data-testid="navbar-desktop-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => isActive
              ? 'relative border-0 bg-transparent p-0 text-sm font-medium text-white no-underline after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-accent'
              : 'relative border-0 bg-transparent p-0 text-sm font-medium text-slate-300 no-underline transition-colors hover:text-white'}
            data-testid={`navbar-link-${item.to.slice(1) || 'home'}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
