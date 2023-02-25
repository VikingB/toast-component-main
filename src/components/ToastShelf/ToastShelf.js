import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const context = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {context.toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            removeToast={() => context.removeToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
