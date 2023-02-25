import React from "react";
import styles from "./ToastForm.module.css";
import Button from "../Button";
import ToastVariants from "../ToastVariants";
import {ToastContext} from "../ToastProvider/ToastProvider";




function ToastForm() {
  
const context = React.useContext(ToastContext);

  return (
    <form onSubmit={(e) => context.addToast(e)} className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={context.message}
                onChange={(e) => context.setMessage(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <ToastVariants
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button
                disabled={context.message.length < 1}
                onClick={(e) => context.addToast(e)}
                type="submit"
              >
                Pop Toast!
              </Button>
            </div>
          </div>
        </form>
  );
}

export default ToastForm;
