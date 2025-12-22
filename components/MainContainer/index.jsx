import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function MainContainer({
    children,
    className,
    ...props
}) {
  return (
    <div
        className={ClassNames(styles.MainContainer, className)}
        {...props}
    >
        {children}
    </div>
  );
}