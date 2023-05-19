import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); // Giup viet ten class duoi dang: post-Item, neu khong se mac dinh la camelCase;
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}></div>
        </header>
    );
}

export default Header;