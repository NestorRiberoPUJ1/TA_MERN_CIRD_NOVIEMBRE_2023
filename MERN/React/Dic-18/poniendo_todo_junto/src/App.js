
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname="Nestor" lastname="Ribero" age={26} hairColor="negro" gender="male" />
      <PersonCard firstname="Jamie" lastname="Chadwick" age={24} hairColor="castaño" gender="female" />
    </div>
  );
}

export default App;
