import React from "react";

import Header from "../Header";
import ToastShelf from "../ToastShelf";
import ToastProvider from "../ToastProvider/ToastProvider";
import ToastForm from "../ToastForm/ToastForm";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      
      <Header/>
      <ToastProvider>
        <ToastShelf/>
        <ToastForm/>
      </ToastProvider>
    </div>
  );
}

export default ToastPlayground;
