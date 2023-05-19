import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//components
import { Wrapper as PopperWrapper } from '~/components/Popper';

//Hooks
import { useState, useEffect } from 'react';

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'

//images
import images from '~/assets/images'

//tooltip, popover, dropdown, and menu solution
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';


const cx = classNames.bind(styles); // Giup viet ten class duoi dang: post-Item, neu khong se mac dinh la camelCase;
function Header() {
    const [searchResult, setSearchResult] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);


    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <img src={images.logo} alt='logo' />
                </div>

                <Tippy
                    visible={searchResult.length > 0} //Hien thi tippy
                    interactive //Tuong tac voi tippy (Select ket qua)
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Ket qua tim kiem</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <Tippy>
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>

                <div className={cx('action')}>

                </div>
            </div>
        </header>
    );
}

export default Header;