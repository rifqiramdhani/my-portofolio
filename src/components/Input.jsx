import React from "react";

const Input = (props) => {
  return (
    <label htmlFor={props.name} className="flex flex-col">
      <span className="text-white font-medium mb-4">{props.label}</span>
      {props.type !== "textarea" ? (
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="bg-tertiary pt-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      ) : (
        <textarea
          rows="7"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className="bg-tertiary pt-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      )}
    </label>
  );
};

export default Input;
