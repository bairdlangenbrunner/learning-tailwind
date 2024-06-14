import { useState } from "react";

// {items: [], heading: string}
// use interface you define the shape of an object
interface ListGroupProps {
  items: string[]; // string array
  heading: string; // TYPE ANNOTATION
  //  function (item: strong) => void
  onSelectItem: (item: string) => void; // property called onselectitem
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  // let selectedIndex = 0;
  //  hook function useState (the state hook)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('');  // this can be used to set a variable called name, e.g.
  // returns an array
  // arr[0] is the selectedIndex variable
  // arr[1] is the updater function

  // const items = [];
  // const message = items.length===0 ? <p>No item found</p> : null

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); // passing a reference NOT calling function
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
