import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div class="flex justify-center items-center fixed bottom-0 w-full text-center mb-4">
        <p class="text-gray-700">I built this website using React.js and Three.js,   Inspired by JavaScipt Mastery.</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
