import React from "react";
import {ToastContext} from "../ToastProvider/ToastProvider";
function ToastVariants() {
  const context  = React.useContext(ToastContext);
  return (
    <>
      {context.variants.map((item) => (
        <label key={item} htmlFor={`item-${item}`}>
          <input
            id={`item-${item}`}
            type="radio"
            name="item"
            value={item}
            checked={item === context.variant}
            onChange={(e) => context.setVariant(e.target.value)}
          />
          {item}
        </label>
      ))}
    </>
  );
}

export default ToastVariants;
