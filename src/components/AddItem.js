import React from "react";

const AddItem = props => {
  return (
    <>
      <div class="form-group">
        <label for="exampleInputEmail1">Quantity</label>
        <input
          type="number"
          min="0"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Input Quantity"
        />
      </div>
    </>
  );
};

export default AddItem;
