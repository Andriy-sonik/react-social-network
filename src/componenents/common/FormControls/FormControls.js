import styles from "./FormControls.module.css";

const FromControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + " " + (hasError ? styles.error : null)}
    >
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const textArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FromControl {...props}>
      <textarea {...input} {...restProps} />
    </FromControl>
  );
};

export const myInput = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FromControl {...props}>
      <input {...input} {...restProps} />
    </FromControl>
  );
};
