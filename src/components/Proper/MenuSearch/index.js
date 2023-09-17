import style from './MenuSearch.module.scss';
import classNames from 'classnames/bind';
import SearchItem from './SearchItem';

function MenuSearch(props) {
    const cx = classNames.bind(style);
    const { data } = props;
    return (
        <div className={cx('wrapper-menu-search')}>
            <SearchItem data={data}></SearchItem>
        </div>
    );
}

export default MenuSearch;
