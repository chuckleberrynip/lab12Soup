import React, { useState } from 'react'

function SoupForm(props) {
    const [input, setInput] = useState('');
    const submitter = e => { 
        setInput(e.target.value)
    };
    const handleSubmit = e => { 
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100), 
            text: input
        });
    };
    return (
        <form className="Soup-Form" onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Stuff.'
            value={input}
            name='text'
            className="soup-input"
            onChange={submitter}
            />
            <button className='soup-button'>New Ingredient</button>
        </form>
    )
}

export default SoupForm

