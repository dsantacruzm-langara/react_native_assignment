import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ dropDownOptions, fetchData }) => {
  //Dropdown states
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(dropDownOptions);


  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value) => {
        fetchData(value);
      }}
    />
  );
};

export default Dropdown;
