import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/03ba2463d50e6bd6cc8d9d1fd7359028~c5_100x100.jpeg?x-expires=1684594800&x-signature=eqPLxnp8xTF3MstSpq3pz1Wboyw%3D" alt="Arsenal" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Arsenal
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>arsenal.com</span>
            </div>
        </div>
    );
}

export default AccountItem;