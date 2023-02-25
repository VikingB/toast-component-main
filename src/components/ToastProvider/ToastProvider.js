import React from "react";
import useEscapeKey from "../../hooks/useEscape";

// import { COLORS } from './constants';
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);

  function addToast(e) {
    e.preventDefault();
    console.log("addToast");
    setToasts((toasts) => [
      ...toasts,
      { variant: variant, message: message, id: crypto.randomUUID() },
    ]);
    setMessage("");
  }
  function removeToast(id) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }
  
  useEscapeKey(() => {
    const nextToasts = [...toasts]
    nextToasts.shift()
    setToasts(nextToasts);

  });


  const context = {
    variants: VARIANT_OPTIONS,
    variant: variant,
    setVariant: setVariant,
    message: message,
    setMessage: setMessage,
    toasts: toasts,
    setToasts: setToasts,
    addToast: addToast,
    removeToast: removeToast,
  };


  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
