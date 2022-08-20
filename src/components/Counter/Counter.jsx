import { observer } from 'mobx-react-lite';
import React from 'react';
import '../../App.css';
import counterStore from './stores/counter.store';

const Counter = observer(() => {
    return (
        <div className='counter'>
            {counterStore.total}
            <div className='btns'>
                <button className='btn' onClick={() => counterStore.increment()}>+</button>
                <button className='btn' onClick={() => counterStore.decrement()}>-</button>
            </div> 
        </div>
    );
});

export default Counter;