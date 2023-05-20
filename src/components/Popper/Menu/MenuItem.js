import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, className }) {
    return (
        <Button className={cx('menu-item-btn', className)} icon={data.icon} to={data.to} >{data.name}</Button >
    );
}

export default MenuItem;