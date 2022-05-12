import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.isError}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.heading}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.isError}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
