import './App.css';
import Filter from './components/Filter';
import ServiceAdd from './components/ServiceAdd'
import ServiceList from './components/ServiceList'

function App() {
  return (
    <div className="App">
      <ServiceAdd></ServiceAdd>
      <Filter></Filter>
      <ServiceList></ServiceList>
    </div>
  );
}

export default App;
