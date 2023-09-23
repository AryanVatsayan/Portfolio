import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Myabout from './components/Myabout';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Myabout />
      <Portfolio />

      <SocialLinks />
    </div>
  );
}

export default App;
