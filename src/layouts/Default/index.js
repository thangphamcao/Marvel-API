import Header from '../LayoutHome/Header';
import Footer from '../LayoutHome/Footer';
import style from './Default.module.scss';
import classNames from 'classnames/bind';
import { Fragment, useState, useEffect, useRef } from 'react';

function Default({ children }) {
    const cx = classNames.bind(style);

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
            <div ref={ref} className={cx('container')}>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Default;
