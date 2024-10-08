import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/SideBar';
import OverView from './components/OverView';
import Navbar from './components/NavBar';
import OverView2 from './components/OverView2';

function App() {
  const homeRef = useRef(null);
  const overViewRef = useRef(null);
  const overView2Ref = useRef(null);

  const handleScroll = (e) => {
    // Mencegah perilaku default scroll
    e.preventDefault();
    
    const delta = Math.sign(e.deltaY); // Positif jika scroll ke bawah, negatif jika scroll ke atas

    if (delta > 0) {
      // Scroll ke bawah
      if (overViewRef.current) {
        overViewRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll ke atas
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div onWheel={handleScroll} style={{ overflow: 'hidden' }}>
      <Sidebar />
      <Navbar />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={overViewRef}>
        <OverView />
      </div>
      <div ref={overView2Ref}>
        <OverView2 />
      </div>
    </div>
  );
}

export default App;
