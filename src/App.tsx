import { Routes, Route , useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import MovingCursor from './components/MovingCursor';
import SmoothScroll from './components/SmoothScroll';

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {
  const location = useLocation()

  return (
    <SmoothScroll>
      <MovingCursor>
        <Header />
        <Suspense fallback={<div className='flex items-center justify-center'>Loading...</div>}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social_media" element={<SocialMedia />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        </Suspense>
        <Footer />
    </MovingCursor>
    </SmoothScroll>
  );
}

export default App;
