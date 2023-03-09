import React, {useState, useEffect} from 'react'

const useFontSelect = () => {
    const [font, setFont] = useState(localStorage.getItem('font') || 'Serif')
    
    useEffect(() => {
        const currentFont = localStorage.getItem('font')
        document.body.classList.remove(currentFont);
        document.body.classList.add(font);
        localStorage.setItem('font', font);
    }, [font])
    return [font, setFont]
}

export default useFontSelect
