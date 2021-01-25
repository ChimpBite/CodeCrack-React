import Header from './components/header/Header';
import Level from './components/level/Level';
import RandomEngine from './components/randomengine/RandomEngine';
import PlayerInput from './components/playerinput/PlayerInput';
import Footer from './components/footer/Footer';

import Container from '@material-ui/core/Container';

import './App.scss';

function App() {
  return (
    <Container fixed className='container'>
      <Header />
      <Level />
      <RandomEngine />
      <PlayerInput />
      <Footer />
    </Container>
  );
}

export default App;
