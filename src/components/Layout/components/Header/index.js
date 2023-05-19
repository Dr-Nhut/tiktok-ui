import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

//images
import images from '~/assets/images'

const cx = classNames.bind(styles); // Giup viet ten class duoi dang: post-Item, neu khong se mac dinh la camelCase;
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <img src={images.logo} alt='logo' />
                </div>

                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;