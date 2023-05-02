import { Fragment, useState } from "react"; //Fragments are component that allows you to group a list of children elements without adding any extra nodes to the HTML DOM
//<Fragment> can also be write as <>
import { MouseEvent } from "react";

// Props: also call properties, an argument that we can send to a component to make it reusable
// Example: {cities: [], heading: string}
interface Props {
    cities: string[];
    heading: string;
    // (city: string) => void
    onSelectItem: (city: string) => void;
}

function ListGroup({cities, heading, onSelectItem}: Props) {
    //Hook -> a fucntion that allows us tap into built-in functions in React
    const [selectedIndex, setSelectedIndex] = useState(-1) //can have data/state that will change over time. it will return an array, arr[0] original value, arr[1] updated value/data
    //const [name, setName] = useState('') Can also use for name
    
    //Event handler
    const handleClick = (event: MouseEvent) => {
        console.log(event);
    }

  return (
    // <> 
    //     <h1>List</h1>
    //     <ul className="list-group">
    //       <li className="list-group-item">An item</li>
    //       <li className="list-group-item">A second item</li>
    //       <li className="list-group-item">A third item</li>
    //       <li className="list-group-item">A fourth item</li>
    //       <li className="list-group-item">And a fifth one</li>
    //     </ul>
    // </>

    //To wrap data dynamically, we use parantheses {}
    //Each list item needs a key so that browser knows where to update. key={item.id} as example
    //When using .map, we can add 2nd parameter index (line 34)
    <> 
        <h1>{heading}</h1>
        { cities.length === 0 && <p>No Items Found</p> }
        <ul className="list-group">
            {cities.map((city, index) => 
                <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                key={city} 
                onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(city);
                    }   
                }>{city}</li>
            )}
        </ul>
    </>
  );
}

export default ListGroup;
