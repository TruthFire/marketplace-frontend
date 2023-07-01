// import { useState } from 'react';
import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container>
        <Searchbar />
      </Container>
    </>
  );
}

export default App;
