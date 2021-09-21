import React, { useState, useEffect } from "react";

const EditItem = props => {
  const [item, setItem] = useState(props.currentItem);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value });
  };
  useEffect(() => {
    setItem(props.currentItem);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateItem(item.id, item);
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
      <button class="form_button">Update item</button>
      <button
        onClick={() => props.setEditing(false)}
        class="form_button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditItem;
