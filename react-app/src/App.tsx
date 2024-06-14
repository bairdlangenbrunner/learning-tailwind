import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //   return (
  //     <div>
  //       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
  //     </div>
  //   );
  // }

  return (
    // <div>
    //   <Alert text="this is an alert"/>
    // </div>

    <>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an alert
        </Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
          console.log("clicked!!!");
        }}
      >
        I made a bumttom
      </Button>
    </>
  );
}

export default App;
