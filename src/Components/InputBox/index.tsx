import React from "react";

type propsType = {
  type: string;
  label: string;
};

function Input(props: propsType) {
  return (
    <div>
      <div>
        <label>{props.label}</label>
        <input type={props.type} />
      </div>
    </div>
  );
}

export default Input;
