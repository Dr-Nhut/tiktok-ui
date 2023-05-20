import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faEarthAsia, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon className={cx('menu-item-icon')} icon={faEarthAsia} />,
        name: "English"
    },
    {
        icon: <FontAwesomeIcon className={cx('menu-item-icon')} icon={faCircleQuestion} />,
        name: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon className={cx('menu-item-icon')} icon={faKeyboard} />,
        name: "Keyboard shortcuts",
    },
];

function Menu({ children }) {
    return (
        <Tippy
            //Hien thi tippy
            interactive //Tuong tac voi tippy (Select ket qua)
            placement='bottom-end' //Vi tri tippy
            delay={[0, 500]}
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {
                            items.map((item, index) => {
                                return <MenuItem key={index} data={item} className={cx('menu-item')}></MenuItem>
                            })
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;