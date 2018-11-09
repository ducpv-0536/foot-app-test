import React from 'react';
import './input-name.scss';

export default class InputName extends React.Component {
    constructor(props) {
        super(props);
        this.getValue = this.getValue.bind(this);
    }

    getValue() {
        return this.input.value;
    }

    render() {
        return (
            <div className='input-name-wrapper'>
            <input
                ref={r => this.input = r}
                type='text'
                name='food_name'
                placeholder='Điền tên món ăn'
                maxLength='125'
                onChange={this.onChangeName}
            />
            </div>
        )
    }
}
