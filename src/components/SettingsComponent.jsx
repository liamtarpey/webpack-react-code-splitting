import React from 'react';
import TestService from './test.service.js';

const SettingsComponent = (props) => {

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
            <h2>Settings Component</h2>
            <div>
                <button onClick={getNumber}>Get number</button>
                &nbsp;
                <button onClick={getName}>Get name</button>
            </div>
            <button onClick={addNumber.bind(null, 2)}>Add 2</button>
            &nbsp;
            <button onClick={changeName.bind(null, 'Seb')}>Change name to Seb</button>
        </div>
    );
};

export default SettingsComponent;
