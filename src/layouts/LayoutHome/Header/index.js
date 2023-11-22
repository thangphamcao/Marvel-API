import style from './Header.module.scss';
import className from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Menu, MenuRank, MenuSearch } from '~/components/Proper';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react/headless';
import { fetchComics } from '~/utils';
import Search from '../Search';

const cx = className.bind(style);

function Header({ checkToggle }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [check, setCheck] = useState(false);

    const handleToggle = () => {
        checkToggle(!check);
        setCheck(!check);
    };

    return (
        <header className={cx('wrapper')}>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start align-center">
                        <Button
                            to="/"
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-red-300"
                        >
                            MARVEL COMIC FAKE{' '}
                        </Button>
                        {check ? (
                            <Icon
                                icon="ph:moon-fill"
                                className={cx('toggle')}
                                style={{
                                    color: 'yellow',
                                    display: 'inline-block',
                                    fontSize: '25px',
                                    paddingLeft: '5px',
                                }}
                                onClick={handleToggle}
                            />
                        ) : (
                            <Icon
                                icon="ph:sun-fill"
                                className={cx('toggle')}
                                style={{
                                    color: 'yellow',
                                    display: 'inline-block',
                                    fontSize: '25px',
                                    paddingLeft: '5px',
                                }}
                                onClick={handleToggle}
                            />
                        )}

                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <Search></Search>

                    <div
                        className={'lg:flex  items-center' + (navbarOpen ? ' flex' : ' hidden')}
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item mx-4">
                                <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className={cx('color-text')}>Home </span>
                                </button>
                            </li>

                            <li className={cx('dropdown nav-item mx-4')}>
                                <button
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className={cx('color-text')}>Thể loại </span>
                                    <Icon className="text-lg" icon="gridicons:dropdown" />
                                </button>
                                <Menu></Menu>
                            </li>

                            <li className={cx('dropdown nav-item mx-4')}>
                                <button
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                                    <span className={cx('color-text')}>Xếp hạng </span>
                                    <Icon className="text-lg" icon="gridicons:dropdown" />
                                </button>
                                <MenuRank></MenuRank>
                            </li>

                            <li className="nav-item mx-4 flex items-center">
                                <Button btn_header color_pink>
                                    SIGN IN
                                </Button>
                            </li>
                            <li className="nav-item mx-4 flex items-center">
                                <Button btn_header color_cyan>
                                    <span>SIGN UP</span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
