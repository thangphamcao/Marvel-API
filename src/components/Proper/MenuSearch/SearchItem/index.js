import style from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

function SearchItem({ data }) {
    const cx = classNames.bind(style);

    function truncate(str, max) {
        return str.length > max ? str.substr(0, max - 1) + '…' : str;
    }

    return (
        <div className={cx('wrapper-list')}>
            {data.map((item) => (
                <div className={cx('list-search')} key={item.id}>
                    <div className={cx('image-comic')}>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Sunset in the mountains" />
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('title')}>
                            <Button to="/home" className="text-white text-lg">
                                {truncate(item.title, 23)}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchItem;
