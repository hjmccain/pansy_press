import React from 'react'
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import flowers from './flowers.png'

function App() {
  const [scrolled, updateScrolled] = React.useState(false)

  const scrollHandler = () => {
    const scrollY = window.scrollY

    if (!scrolled && scrollY > 70) {
      updateScrolled(true)
    } else if (scrolled && scrollY < 70) {
      updateScrolled(false)
    }
  };

  window.addEventListener('scroll', scrollHandler, true);

  return (
    // <div className={scrolled ? `App scrolled` : 'App'}>
    //   <div className={scrolled ? `header-scrolled` : ''}>
    <div className="App">
      <div>
        <Header scrolled={scrolled} />
      </div>
      <img src={flowers} />
      <Outlet />
    </div >
  );
}

export default App;
