import React, { useState } from "react";
import styles from "./styles";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([props.defaultOption]);

  //   toggles the dropdown button when clicked upon
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //   handles the situation when the button is clicked upon
  const handleSelect = (item) => {
    let newSelections =
      selectedItems[0] === props.defaultOption ? [] : [...selectedItems];

    if (item === "Select All") {
      newSelections = props.options.slice(0, props.options.length - 1);
    } else if (item === "Select None") {
      newSelections = [];
    }

    if (newSelections.includes(item)) {
      setSelectedItems(newSelections.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...newSelections, item]);
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
        {/* using the state above, it will see if arrow should go up or go down */}
        <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul style={styles.menu}>
          {/* This will render each individual option in the dropdown */}
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

export default Dropdown;
