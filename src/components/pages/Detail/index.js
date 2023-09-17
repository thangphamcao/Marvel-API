import style from './Detail.module.scss';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import Button from '~/components/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGetOneComic, fetchGetListCharOfComic } from '~/utils';

function Detail() {
    const cx = classNames.bind(style);
    const params = useParams();

    const [getComic, setComic] = useState([]);
    const [getChar, setChar] = useState([]);

    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    // useEffect(() => {
    //     async function getComic() {
    //         await fetch(
    //             `https://gateway.marvel.com/v1/public/comics/${params.id}?ts=1&apikey=889013ae5ccba0aed0aa5298229b9eda&hash=56c7cbd5e7aa275bef8975bd5f4dadac`,
    //         )
    //             .then((response) => response.json())
    //             .then((res) => {
    //                 setComic(res.data.results);
    //                 setTitle(res.data.results[0].title);
    //             });
    //     }
    //     getComic();

    //     async function getListChar() {
    //         await fetch(
    //             `https://gateway.marvel.com/v1/public/comics/${params.id}/characters?ts=1&apikey=889013ae5ccba0aed0aa5298229b9eda&hash=56c7cbd5e7aa275bef8975bd5f4dadac`,
    //         )
    //             .then((response) => response.json())
    //             .then((res) => {
    //                 setChar(res.data.results);
    //             });
    //     }
    //     getListChar();
    // }, [params]);

    useEffect(() => {
        async function getOneComic() {
            await fetchGetOneComic(params.id)
                .then((data) => {
                    setComic(data);
                    setTitle(data[0].title);
                })
                .catch((err) => console.log(err));
        }
        getOneComic();

        async function getListCharOfComic() {
            await fetchGetListCharOfComic(params.id)
                .then((data) => {
                    setChar(data);
                })
                .catch((err) => console.log(err));
        }
        getListCharOfComic();
    }, [params.id]);

    console.log(title);

    return (
        <Fragment>
            <div className={cx('navigation')}>
                <div className={cx('home')}>
                    <span>
                        <Icon icon="mdi:home" />
                    </span>
                    <Button to="/">Trang chủ</Button>
                </div>

                <span>
                    <Icon icon="iconoir:nav-arrow-right" />
                </span>

                <span>Truyện</span>

                <span>
                    <Icon icon="iconoir:nav-arrow-right" />
                </span>

                <span>{title && title}</span>
            </div>
            <div className={cx('detail-comic')}>
                {getComic.map((item, index) => (
                    <div key={index} className={cx('comic')}>
                        <div className={cx('image-comic')}>
                            <img
                                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt="Sunset in the mountains"
                            />
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('title')}>
                                <a href="/" className="text-yellow-300 text-lg text-2xl">
                                    {item.title}
                                </a>
                                <div className={cx('author')}>
                                    <span className="text-stone-400">Tác giả: </span>
                                    {item.creators.items.length === 0 ? (
                                        <span className="text-sky-400">Đang cập nhật</span>
                                    ) : (
                                        item.creators.items.map((char, n) => {
                                            return (
                                                <span key={`${n}1234`} className="text-sky-400 mr-3">
                                                    {char.name}
                                                </span>
                                            );
                                        })
                                    )}
                                </div>
                                <div className={cx('status')}>
                                    <span className="text-stone-400">Trạng thái: </span>
                                    <span className="text-sky-400">Đang cập nhật</span>
                                </div>
                                <div className={cx('status')}>
                                    <span className="text-stone-400">Series: </span>
                                    <span className="text-sky-400">{item.series.name}</span>
                                </div>

                                <div className={cx('theloai')}>
                                    <span className="text-stone-400">Nhân vật: </span>

                                    {item.characters.items.length === 0 ? (
                                        <span className="inline-block rounded-lg px-3 py-1 text-xs font-semibold mr-1 mb-2 text-sky-400">
                                            Đang cập nhật
                                        </span>
                                    ) : (
                                        item.characters.items.map((char, n) => (
                                            <span
                                                key={`${n}123`}
                                                className="inline-block rounded-lg px-3 py-1 text-xs font-semibold mr-1 mb-2 text-sky-400"
                                            >
                                                {char.name}
                                            </span>
                                        ))
                                    )}
                                </div>

                                <div className={cx('theloai')}>
                                    <div className={cx('title')}>
                                        <span className="text-stone-400"> Tóm tắt nội dung:</span>
                                    </div>
                                    <div className={cx('content-story')}>
                                        <p className="text-sky-400">
                                            {item.description === '' ? 'Đang cập nhật...' : item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('rate')}>
                                    <span className="text-stone-400">Rating: </span>
                                    <span>
                                        <Icon icon="ph:star-fill" />
                                    </span>
                                    <span>
                                        <Icon icon="ph:star-fill" />
                                    </span>
                                    <span>
                                        <Icon icon="ph:star-fill" />
                                    </span>
                                    <span>
                                        <Icon icon="ph:star-fill" />
                                    </span>
                                    <span>
                                        <Icon icon="ph:star-fill" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* {getChar.map((item, index) => console.log(item.id))} */}
            {getChar.length > 0 && (
                <div className={cx('list-characters')}>
                    <div className={cx('title')}>
                        <span>CHARACTERS</span>
                    </div>
                    <div className={cx('list-comic1')}>
                        {getChar.map((item, index) => (
                            <div key={index} className={cx('comics1')}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className={cx('image-comic1')}>
                                        <img
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                            alt="Sunset in the mountains"
                                            onClick={() => navigate(`/search/character/${item.id}`)}
                                        />
                                    </div>
                                    <div>
                                        <Button to={`/search/character/${item.id}`} className="text-gray-400 text-lg">
                                            {item.name}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Detail;
