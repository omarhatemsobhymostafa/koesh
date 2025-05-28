
import './App.css';
import Nav from './Components/Nav';
import Bannar from './Components/Bannar';
import About from './Components/About';
import Service from './Components/Service';
import MySkills from './Components/MySkills';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import MySimbileWorks from "./Components/MySimbleWorks"
document.addEventListener("mousemove", function(e) {
  let star = document.getElementById("star");
  star.style.left = (e.clientX + window.scrollX) - 20 + "px";
  star.style.top = (e.clientY + window.scrollY)- 20 + "px";
});


function App() {
  return (
    
    <>
    <div className="star" id='star'></div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      
      <Nav />
      <Bannar/>
      <About />
      <Service />
      <MySkills />
      <Resume />

      <MySimbileWorks/>
      <ContactMe />
      <Footer/>
    </>
  );
}

export default App;
