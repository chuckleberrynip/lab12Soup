import React, { useState } from 'react'
import SoupForm from './SoupForm'

function SoupList() {
    const[ing, setIngs] = useState([]);
    const addIng = newIng => { 
        if(!newIng.text || /^\s*$/.test(newIng.text)) { 
            return 
        }
        const newnewIng = [newIng, ...ing]
        setIngs(newnewIng)
        console.log(...ing)
    }
    return (
        <div>
            <h1>Too Many Cooks Spoil The Broth</h1>
            <SoupForm onSubmit={addIng} />
        </div>
    )
}

export default SoupList
