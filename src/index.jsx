import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/Registration';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>REGISTRATION</h1>
        <div className="logo" />
      </header>
      <main>  
        <Registration />
      </main>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
