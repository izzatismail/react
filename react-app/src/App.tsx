//import Message from './Message'
import ListGroup from "./components/ListGroup"

function App() {
  let cities = [
    'New York',
    'Paris',
    'Tokyo',
    'San Fransisco',
    'London'
];

const handleSelectItem = (city: string) => {
  console.log(city)
}

  return (
    <div>
      <ListGroup cities={cities} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  )
}

export default App
