import React from 'react';
import TestService from './test.service.js';

const HomeComponent = (props) => {

    const getName = () => {
        alert(`Current name is ${TestService.getName()}`);
    };

    const getNumber = () => {
        alert(`Current number is ${TestService.getNumber()}`);
    };

    const changeName = (name) => {
        TestService.changeName(name);
        getName();
    };

    const addNumber = (num) => {
        TestService.incrementNumber(num);
        getNumber();
    };

    return (
        <div>
            <h2>Home Component</h2>
            <div>
                <button onClick={getNumber}>Get number</button>
                &nbsp;
                <button onClick={getName}>Get name</button>
            </div>
            <button onClick={addNumber.bind(null, 13)}>Add 13</button>
            &nbsp;
            <button onClick={changeName.bind(null, 'James')}>Change name to James</button>
            &nbsp;
            <button onClick={changeName.bind(null, 'Liem')}>Change name to Liem</button>
            <hr />
        </div>
    );
};

export default HomeComponent;
