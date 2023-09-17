import { menuItems } from './MenuItems';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';

function Menu() {
    const cx = classNames.bind(style);
    return (
        <nav className={cx('wrapper-menu')}>
            <ul className={cx('menus')}>
                {menuItems.map((menu, index) => {
                    return (
                        <li className="menu-items" key={index}>
                            <a href={menu.url}>{menu.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Menu;
