import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";

const ProcuctCategoryRow = props => {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
};

const ProductRow = props => {
  let name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: "red" }}>{props.product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

const ProductTable = props => {
  let rows = [];
  let lastCategory = null;

  props.products.forEach(product => {
    if (
      product.name.indexOf(props.filterText) === -1 ||
      (!product.ctocked && props.inStockOnly)
    ) {
      return null;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProcuctCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const SearchBar = props => {
  let filterTextInput, inStockOnlyInput;
  const handleChange = () => {
    props.onUserInput(filterTextInput.value, inStockOnlyInput.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search.."
        value={props.filterText}
        ref={input => (filterTextInput = input)}
        onChange={handleChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          ref={input => (inStockOnlyInput = input)}
          onChange={handleChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

const FilterableProductTable = props => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleUserInput = (filterText, inStockOnly) => {
    setFilterText(filterText);
    setInStockOnly(inStockOnly);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onUserInput={handleUserInput}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
