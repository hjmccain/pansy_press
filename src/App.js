import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import flowers from './flowers.png'
import flowers2 from './flowers2.png'
import flowers3 from './flowers3.png'
import flowers4 from './flowers4.png'
import { useLocation } from "react-router-dom";

function App() {
  const [scrolled, updateScrolled] = React.useState(false)
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // const { pathname } = useLocation();

  // const getImage = () => {
  //   if (pathname.includes('poems')) {
  //     return flowers
  //   }
  //   if (pathname.includes('submit')) {
  //     return flowers2
  //   }
  // }

  React.useEffect(() => {
    if (isHome) {
      navigate(`poems`);
    }
  })

  React.useEffect(() => {
    if (window.innerWidth < 790) {
      updateScrolled(true)
    }
  }, [])

  const scrollHandler = () => {
    const scrollY = window.scrollY

    if (window.innerWidth < 790) {
      updateScrolled(true)
    }

    if (window.innerWidth > 790) {
      if (!scrolled && scrollY > 70) {
        updateScrolled(true)
      } else if (scrolled && scrollY < 70) {
        updateScrolled(false)
      }
    }
  };

  window.addEventListener('scroll', scrollHandler, true)
  window.addEventListener('resize', scrollHandler, true)

  return (
    <div className="App">
      <div>
        <Header scrolled={scrolled} />
      </div>
      <div>
        <img className="flowers1" src={flowers} />
        {/* <img src={flowers3} /> */}
        {/* <img className="flowers4" src={flowers4} /> */}
      </div>
      <Outlet />
    </div >
  );
}

export default App;
