import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './assets/scss/App.scss';

function App() {
  const navLink = [
    { to: '/users', label: 'Users' },
    { to: '/posts', label: 'Posts' },
    { to: '/comments', label: 'Comments' },
    { to: '/settings', label: 'Settings' }
  ];

  return (
    <div className="app">
      <nav className="navigation">
        <h1>Dashboard</h1>
        {navLink.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default App;
