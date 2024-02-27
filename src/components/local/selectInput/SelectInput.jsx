import React from "react";
import cssGlobal from "../../../styles/global.css";

function SelectInput({ props }) {
  const { SelectBox, Select, SelectOption, InputLabel } = cssGlobal;
  const { id, options, onChange, title } = props;

  return (
    <SelectBox>
      <InputLabel>{title}</InputLabel>
      <Select id={id} onChange={onChange} title={title}>
        {options.map((option) => (
          <SelectOption key={option.id} value={option.value}>
            {option.title}
          </SelectOption>
        ))}
      </Select>
    </SelectBox>
  );
}

export default SelectInput;
