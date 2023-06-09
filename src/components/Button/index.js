import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ to, link = false, href, icon, className, primary = false, outline = false, text = false, rounded = false, disabled = false, onClick, children, size = 'medium', ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    if (disabled) {
        delete props.onClick;
    }
    if (to) {
        props.to = to;
        Comp = Link;
        link = true;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';

    }
    const classes = cx('wrapper', size, className, { primary, outline, text, rounded, disabled, link });

    return (
        <Comp className={classes} {...props}>
            {icon}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;