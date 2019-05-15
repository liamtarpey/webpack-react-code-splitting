import React from 'react';
import TestService from './test.service.js';

const AboutComponent = (props) => {

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
            <h2>About me</h2>
            <div>
                <button onClick={getNumber}>Get number</button>
                &nbsp;
                <button onClick={getName}>Get name</button>
            </div>
            <button onClick={addNumber.bind(null, 5)}>Add 5</button>
            <button onClick={changeName.bind(null, 'Celia')}>Change name to Celia</button>
        </div>
    );
};

export default AboutComponent;
