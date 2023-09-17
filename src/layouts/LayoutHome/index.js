import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SlideShow from './SlideShow';
import style from './LayoutHome.module.scss';
import classNames from 'classnames/bind';
import { Fragment, useState, useEffect, useRef } from 'react';

const cx = classNames.bind(style);

function LayoutHome({ children }) {
    const [check, setCheck] = useState(false);

    const ref = useRef();

    const checkToggle = (checked) => {
        setCheck(checked);
    };

    useEffect(() => {
        if (check) {
            document.body.style.backgroundColor = 'rgb(245, 236, 236)';
            ref.current.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = '#342d2d';
            ref.current.style.backgroundColor = 'black';
        }
    });

    return (
        <Fragment>
            <Header checkToggle={checkToggle} />
            <SlideShow />
            <div ref={ref} className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Sidebar />
            </div>
            <Footer />
        </Fragment>
    );
}

export default LayoutHome;
