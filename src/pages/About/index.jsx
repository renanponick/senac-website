import './styles.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className='about'>
  

    </div>
  );
}
