//import Message from './Message'
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"
import { useState } from "react";

function App() {
  let cities = [
    'New York',
    'Paris',
    'Tokyo',
    'San Fransisco',
    'London'
];

const [alertVisible, setAlertVisible] = useState(false);

const handleSelectItem = (city: string) => {
  console.log(city)
}
  return (
    //List Group
    // <div>
    //   <ListGroup cities={cities} heading="Cities" onSelectItem={handleSelectItem}/>
    // </div>

    //Alert - Passing children
    

    <div>
      { alertVisible && <Alert onDismiss={() => setAlertVisible(false)}>
        Alerts! <span>2</span>
      </Alert>
      }
      <Button onclick={() => setAlertVisible(true)}>
        <b>Press me!</b>
       </Button>
    </div>

    //Button exercise
    // <div>
    //   <Button onclick={() => console.log('Clicked!')}>
    //     <b>Press me!</b>
    //   </Button>
    // </div>
  )
}

export default App
