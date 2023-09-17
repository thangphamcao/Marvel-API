import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { Icon } from '@iconify/react';
import Button from '~/components/Button';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { fetchCharacter } from '~/utils';

function Sidebar() {
    const cx = classNames.bind(style);

    const [char, setChar] = useState([]);

    // useEffect(() => {
    //     async function getListComic() {
    //         await fetch(
    //             'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=889013ae5ccba0aed0aa5298229b9eda&hash=56c7cbd5e7aa275bef8975bd5f4dadac',
    //         )
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 setChar(response.data.results);
    //             });
    //     }
    //     getListComic();
    // }, []);

    useEffect(() => {
        async function getListComic() {
            await fetchCharacter()
                .then((data) => setChar(data))
                .catch((err) => console.log(err));
        }
        getListComic();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('history')}>
                <div className={cx('title-sidebar')}>
                    <Icon icon="game-icons:character" style={{ color: 'red', display: 'inline-block' }} />
                    <span>CHARACTERS</span>
                </div>
                {char.map((item, index) => {
                    if (index < 10) {
                        return (
                            <div className={cx('list-comic')} key={index}>
                                <div className={cx('comics')}>
                                    <div className={cx('image-comic')}>
                                        <img
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                            alt="Sunset in the mountains"
                                        />
                                    </div>
                                    <div className={cx('info')}>
                                        <div className={cx('title')}>
                                            <Button to="/detail" className="text-gray-400 text-lg">
                                                {item.name}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return <Fragment key={index}></Fragment>;
                    }
                })}
            </div>
        </div>
    );
}

export default Sidebar;
