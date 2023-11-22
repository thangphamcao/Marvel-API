import style from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    onClick,
    children,
    btn_header,
    color_pink,
    color_cyan,
    btn_following,
    text_red,
    ...passProps
}) {
    const cx = classNames.bind(style);

    const classes = cx('wrapper', {
        btn_header,
        color_cyan,
        color_pink,
        btn_following,
        text_red,
    });
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span className="flex items-center text-base">{children}</span>
        </Comp>
    );
}

export default Button;
