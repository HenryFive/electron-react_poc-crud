import React, { useState } from "react";
import InventoryTable from "./Components/Tables/inventoryTable";
import AddItem from "./Components/Forms/addItem";
import EditItem from "./Components/Forms/editItem";
import "./App.css";

const App = () => {
  const itemsData = [
    { id: 1, name: "Tray", description: "Aluminum from Pakistan", qty: 10 },
    { id: 2, name: "Couldron", description: "Copper, small", qty: 3 },
    { id: 3, name: "Spoons", description: "Stainless steel", qty: 22 },
    { id: 4, name: "Forks", description: "Stainless steel", qty: 22 }
  ];

  const [items, setItems] = useState(itemsData);

  const addItem = item => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = id => {
    setEditing(false);
    setItems(items.filter(item => item.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", description: "", qty: 12  };
  const [currentItem, setCurrentItem] = useState(initialFormState);

  const editRow = item => {
    setEditing(true);
    setCurrentItem({ id: item.id, name: item.name, description: item.description, qty: item.qty });
  };

  const updateItem = (id, updatedItem) => {
    setEditing(false);

    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  return (
    <section class="main">
      <h1>Inventory</h1>
      <section>
        <section>
          <h2>View items</h2>
          <InventoryTable items={items} editRow={editRow} deleteItem={deleteItem} />
        </section>
        <section>
          {editing ? ( 
            <div>
              <h2>Edit item</h2>
              <EditItem
                editing={editing}
                setEditing={setEditing}
                currentItem={currentItem}
                updateItem={updateItem}
              />
            </div>
          ) : (
            <div>
              <h2>Add item</h2>
              <AddItem addItem={addItem} />
            </div>
          )}
        </section>
      </section>
    </section>
  );
};

export default App;
