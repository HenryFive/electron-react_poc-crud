import React, { useState } from "react";
import "./forms.css";

const AddItem = props => {
  const initialFormState = { id: null, name: "", description: "", qty: "" };
  const [item, setItem] = useState(initialFormState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!item.name || !item.description || !item.qty ) return;

        props.addItem(item);
        setItem(initialFormState);
      }}
    >
      <div class="form__div">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleInputChange}
        />
      </div>
      <div class="form__div">
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleInputChange}
        />
      </div>
      <div class="form__div">
        <label>Qty: </label>
        <input
          type="text"
          name="qty"
          value={item.qty}
          onChange={handleInputChange}
        />
      </div>
      <button class="form__button">Add new item</button>
    </form>
  );
};

export default AddItem;
