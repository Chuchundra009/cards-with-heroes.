
import './App.css';
import Card from './components/Card';
import data from './data.json';

function App() {

  return (
    <div className="container">
      {data.map((item, index) => (
        <Card name={item.name} superpowers={item.superpowers} url={item.url} info={item.info} key={index}/>
      ))}


    </div>
  )
}

export default App
