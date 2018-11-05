import React from "react";

const AddItem = props => {
  var products = props.products.map(item => {
    return (
      <option id={item.id}>
        {item.name} {item.priceInCents}
      </option>
    );
  });
  return (
    <>
      <div className="form-group">
        <label for="exampleInputEmail1">Quantity</label>
        <input
          type="number"
          min="0"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Input Quantity"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Products</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          onChange={props.grabItems}
        >
          <option selected disabled>
            {" "}
            select an option
          </option>
          {products}
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.submitButton}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddItem;
