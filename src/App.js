import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key = {item.id}
      item = {item}
      />
    )
  })
  return (
    <>
    <Header/>
    {cards}
    {/* <Card/> */}
    </>
  );
}

export default App;
