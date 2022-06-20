import React, { Fragment, useState } from 'react'
import { faker } from '@faker-js/faker'
const numOfFields = 5;
const Autoimplement = () => {
    const [ssnValues, setValue] = useState({
        ssn1: "",
        ssn2: "",
        ssn3: "",
        ssn4: "",
        ssn5: ""
    });
    const handleChange = e => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        // Check if they hit the max character length
        if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < 5) {
                // Get the next input field
                const nextSibling = document.querySelector(
                    `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
                );


                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }

        }

        setValue({
            ...value,
            [`ssn${fieldIndex}`]: value
        });
    }


    return (
        <Fragment>
            <input style={{ width: '10%' }} name="ssn-1" type='password' maxLength={1} onChange={handleChange} />
            <input style={{ width: '10%' }} name="ssn-2" type='password' maxLength={1} onChange={handleChange} />
            <input style={{ width: '10%' }} name="ssn-3" type='password' maxLength={1} onChange={handleChange} />
            <input style={{ width: '10%' }} name="ssn-4" type='password' maxLength={1} onChange={handleChange} />
            <input style={{ width: '10%' }} name="ssn-5" type='password' maxLength={1} onChange={handleChange} />
            <div id='fakecode'>
                {faker.random.alphaNumeric(5)}
            </div>
        </Fragment>
    )
}

export default Autoimplement