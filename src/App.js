import './App.css';
import Work from './components/work/Work';
import Stack from './components/stack/Stack';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App bg-gray-200">
      <Navbar/>
      <Header />
      <Stack/>
      <Work/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
