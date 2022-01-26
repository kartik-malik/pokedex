import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import PokePage from './components/Pokepage';
import { Route, Routes } from 'react-router-dom';
import PokeResultPage from './components/PokeResultsPage/PokeResultPage';

function App() {
      <PokePage/>
      return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<PokePage/>}/>
        <Route path="/pokemon" exact element={<PokeResultPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
