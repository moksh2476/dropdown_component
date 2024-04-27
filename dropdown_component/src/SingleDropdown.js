import React, { useState } from "react";
import styles from "./styles";
function SingleDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItem] = useState([props.defaultOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    let newSelections =
      selectedItems[0] === props.defaultOption ? [] : [...selectedItems];

    if (item === "Select All") {
      newSelections = props.options.slice(0, props.options.length - 1);
    } else if (item === "Select None") {
      newSelections = [];
    }

    if (newSelections.includes(item)) {
      setSelectedItem(newSelections.filter((selected) => selected !== item));
    } else {
      setSelectedItem([item]);
    }
  };

  const displaySelectedItems = () => {
    return selectedItems.length > 0
      ? selectedItems.join(", ")
      : "Please select from the options below";
  };

  return (
    <div style={styles.dropdown}>
      <button onClick={toggleDropdown} style={styles.button}>
        {displaySelectedItems()}
        <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul style={styles.menu}>
          {props.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={styles.item}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SingleDropdown;
