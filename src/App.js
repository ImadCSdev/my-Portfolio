// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";


// // import Blog from "./components/Blog";  // Add this import

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//         {/* <Blog />  */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // export default App;
// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// // import Blog from "./components/Blog"; // Uncomment when the Blog component is ready

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         {/* Using a wrapper to handle errors gracefully */}
//         <React.Suspense fallback={<p>Loading...</p>}>
//           <About />
//           <Projects />
//           <Skills />
//           <Contact />
//           {/* <Blog /> Uncomment when Blog is implemented */}
//         </React.Suspense>
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;

import React from "react";
import StatsSection from "./components/AnimatedStats.js"; // Import the new StatsSection component

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <StatsSection /> {/* Add this to your layout */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
