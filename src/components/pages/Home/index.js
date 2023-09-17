import style from './Home.module.scss';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchComics } from '~/utils';

function Home() {
    const cx = classNames.bind(style);

    const navigate = useNavigate();

    const [comic, setComic] = useState([]);

    // useEffect(() => {
    //     async function getListComic() {
    //         await fetch(
    //             'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=889013ae5ccba0aed0aa5298229b9eda&hash=56c7cbd5e7aa275bef8975bd5f4dadac',
    //         )
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 const movies = response.data.results;
    //                 setComic(movies);
    //             });
    //     }
    //     getListComic();
    // }, []);

    useEffect(() => {
        async function getListComic() {
            await fetchComics()
                .then((data) => setComic(data))
                .catch((err) => console.log(err));
        }
        getListComic();
    }, []);

    const handleGoToDetail = (id) => {
        navigate(`/comic/${id}`);
    };

    function truncate(str, max) {
        return str.length > max ? str.substr(0, max - 1) + '…' : str;
    }

    return (
        <Fragment>
            <div className={cx('title-content')}>
                <Icon icon="ion:book-sharp" style={{ color: 'red', display: 'inline-block' }} />

                <span>COMIC</span>
            </div>

            <div className={cx('list-comic')}>
                {comic.map((item, index) => (
                    <div className={cx('comics')} key={index}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div className={cx('image-comic')}>
                                <img
                                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                    alt="Sunset in the mountains"
                                    onClick={() => handleGoToDetail(item.id)}
                                />
                            </div>
                            <div className={cx('title')}>
                                <Button to={`/comic/${item.id}`} className="text-gray-400 text-lg">
                                    {truncate(item.title, 20)}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default Home;
