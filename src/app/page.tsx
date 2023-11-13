"use client";
import Home from './sections/Home/Home';
import Cases from './sections/Cases/Cases';
import Team from './sections/Team/Team';
import FloatingMenu from './components/FloatingMenu';
import Disciplinas from './sections/Disciplinas/Disciplinas';
import Footer from './sections/Footer/Footer';

const HomeContent = () => {
  return (
    <>
    <Home />
    <Cases />
    <Team />
    <Disciplinas />
    <Footer />
    </>
  );
};

export default HomeContent;