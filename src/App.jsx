import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './Components/Card/Card';
import { Header } from './Components/Layouts/Header/Header';
import { Home } from './Components/Layouts/Home/Home';
import Spinner from './Components/Spinner/Spinner';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=4')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false); 
      })
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <>
      <Header />
      <Home>
        {loading ? (<Spinner />) : (
          characters.map(x =>
            <Card
              key={x.id}
              name={x.name}
              specimen={x.species}
              image={x.image}
            />
          )
        )}
      </Home>
    </>
  );
}

export default App;
