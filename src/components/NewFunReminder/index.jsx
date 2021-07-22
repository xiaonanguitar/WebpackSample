import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import './style/index.less';

const useLocalStorage = (id) => {
    const [new_fun_key, setKey] = useState(() => {
        return localStorage.getItem(id) || '';
    });
    useEffect(() => {
        localStorage.setItem(id, new_fun_key);
    }, [new_fun_key])

    return [new_fun_key, setKey];
}

export default function NewFunReminder(props) {
    const { id, placement } = props;
    const [new_fun_key, setKey] = useLocalStorage(id);
    return (
        <div className="reminder-popover-wrapper">
            
            <div className={cx("reminder-popover", placement, {
                'hide': new_fun_key,
                'animator-hor': placement === 'right',
                'animator-ver': placement === 'bottom',
            })}>
                <div className="content">新功能上线啦</div>
                <div className="know">
                    <button onClick={() => setKey(id)}>知道了</button>
                </div>
            </div>
            {props.children}
        </div>
    );
}