import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, removeToast }) {
  const DynamicIcon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <DynamicIcon size={24} />
      </div>
      <VisuallyHidden>{variant}</VisuallyHidden>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={() => {
          removeToast();
        }}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
