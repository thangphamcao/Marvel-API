import style from './Search.module.scss';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import Tippy from '@tippyjs/react/headless';
import { MenuSearch } from '~/components/Proper';
import { useState, useEffect, useRef } from 'react';
import { fetchComics } from '~/utils';
import { useDebounce } from '~/hook';

function Search() {
    const cx = classNames.bind(style);

    const ref = useRef();

    const [q, setQ] = useState('');

    const [searchParam] = useState(['title']);

    const [searchResult, setSearchResult] = useState([]);
    const [data, setData] = useState([]);

    const [check, setCheck] = useState(false);

    const debounceValue = useDebounce(q, 1000);

    useEffect(() => {
        async function getListComic() {
            await fetchComics()
                .then((data) => setData(data))
                .catch((err) => console.log(err));
        }
        getListComic();
    }, []);

    useEffect(() => {
        const handleSearch = () => {
            return data.filter((item) => {
                return searchParam.some((newItem) => {
                    return item[newItem].toString().toLowerCase().startsWith(debounceValue.toLowerCase());
                });
            });
        };
        setSearchResult(handleSearch());
        if (debounceValue === '') {
            setSearchResult([]);
        }
    }, [data, debounceValue, searchParam]);

    const handleType = (e) => {
        setQ(e.target.value);
        setCheck(true);
    };

    return (
        <Tippy
            visible={searchResult.length > 0 && check}
            render={(attrs) => (
                <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                    <MenuSearch data={searchResult}></MenuSearch> *
                </div>
            )}
        >
            <div className={cx('input-search')}>
                <div className="relative flex flex-wrap items-stretch ">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <Icon className="absolute top-4 left-4" icon="carbon:search" />
                    </span>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={q}
                        ref={ref}
                        onChange={(e) => handleType(e)}
                        className="px-3 py-3 placeholder-slate-300 text-white relative rounded-3xl text-sm border border-slate-300 outline-none focus:outline-none focus:ring pl-10  w-72"
                    />
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
