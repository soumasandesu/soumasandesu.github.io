import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function Page({
    children,
    className,
    dark,
    ...props
}) {
  return (
    <div
        className={ClassNames(styles.Page, "page", dark && "dark", className)}
        {...props}
    >
        {children}
    </div>
  );
}