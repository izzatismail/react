import { Fragment } from "react"; //Fragments are component that allows you to group a list of children elements without adding any extra nodes to the HTML DOM
//<Fragment> can also be write as <>


function ListGroup() {
    let cities = [
        'New York',
        'Paris',
        'Tokyo',
        'San Fransisco',
        'London'
    ];
    cities = [];

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
    <> 
        <h1>List</h1>
        { cities.length === 0 && <p>No Items Found</p> }
        <ul className="list-group">
            {cities.map(city => 
                <li key={city}>{city}</li>
            )}
        </ul>
    </>
  );
}

export default ListGroup;
