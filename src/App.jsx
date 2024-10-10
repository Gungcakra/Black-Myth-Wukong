import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/SideBar'; // Perbaiki penamaan direktori jika perlu
import OverView from './components/OverView';
import Navbar from './components/NavBar';
import OverView2 from './components/OverView2';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const homeRef = useRef(null);
  const overViewRef = useRef(null);
  const overView2Ref = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();

    const delta = Math.sign(e.deltaY); // Positif jika scroll ke bawah, negatif jika scroll ke atas

    if (delta > 0) {
      // Scroll ke bawah
      if (homeRef.current && homeRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
        overViewRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (overViewRef.current && overViewRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
        overView2Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (overView2Ref.current && overView2Ref.current.getBoundingClientRect().top >= 0) {
        overViewRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (overViewRef.current && overViewRef.current.getBoundingClientRect().top >= 0) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Jika true, animasi hanya dimainkan sekali
    });
  }, []);

  return (
    <div onWheel={handleScroll} style={{ overflow: 'hidden' }}>
      <Sidebar />
      <Navbar />
        <Home />
        <About />
        <OverView />
        <OverView2 />
        <Footer />
      {/* <div ref={homeRef}>
      </div>
      <div ref={overViewRef}>
      </div>
      <div ref={overView2Ref}>
      </div> */}
    </div>
  );
}

export default App;