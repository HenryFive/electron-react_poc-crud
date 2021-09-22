import React from "react";
import "./inventoryTable.css"

const InventoryTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Qty</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.items.length > 0 ? (
          props.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td class="table--actions">
                <button
                  onClick={() => props.editRow(item)}
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteItem(item.id)}
                  className="table__delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={10}>No items</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default InventoryTable;
