import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { Fragment } from 'react';
import style from './SlideShow.module.scss';
import classNames from 'classnames/bind';

// Array BackGround
const slideImages = [
    {
        title: 'Tower Of God',
        url: 'https://e0.pxfuel.com/wallpapers/409/213/desktop-wallpaper-tower-of-god-bam-x-khun-tower-god-god-art-tower-of-god-baam-thumbnail.jpg',
    },
    {
        title: 'One Punch Man',
        url: 'https://cdn.europosters.eu/image/750/posters/one-punch-man-destruction-i61133.jpg',
    },
    {
        title: 'Sword Art Online',
        url: 'https://prod-printler-front-as.azurewebsites.net/media/photo/126307.jpg?mode=crop&width=727&height=1024&rnd=0.0.1',
    },
];

function SlideShow() {
    const cx = classNames.bind(style);
    return (
        <Fragment>
            <Fade>
                {slideImages.map((item, index) => (
                    <div
                        className={cx('container-slideshow')}
                        key={index}
                        style={{ backgroundImage: `url(${item.url})` }}
                    ></div>
                ))}
            </Fade>
        </Fragment>
    );
}

export default SlideShow;
