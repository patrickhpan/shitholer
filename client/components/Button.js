import React from 'react';
import cn from 'classnames';
import noop from 'util/noop';

const Button = ({ className = '', text = 'Button', disabled = false, onClick = noop }) => {
    const buttonCN = cn([
        className,
        { 'button-disabled': (disabled === true) },
        'button'
    ])

    const buttonOnClick = (disabled === false && onClick instanceof Function) ?
        onClick :
        noop;
    
    return <div className={buttonCN} children={text} onClick={onClick} />
}

export default Button;