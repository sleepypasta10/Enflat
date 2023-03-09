import React from 'react'
import PlayAudio from './PlayAudio';

function Word({ data }) {
    // console.log(data);
    const audioFile = data && (data[0]?.phonetics[0]?.audio === ""
        ?
        data[0]?.phonetics[1]?.audio
        :
        data[0].phonetics[0]?.audio);

    let audio = new Audio(data && audioFile);
    audio.volume = 0.75;
    const startAudio = () => {
        audio.play();
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <h2 className='dark:text-white mb-4 font-bold text-3xl md:text-[60px]'>{data[0]?.word}</h2>
                    <p className='text-[var(--color-primary)]'>{data[0]?.phonetic}</p>
                </div>
                {audioFile && <PlayAudio start={startAudio}/> }
            </div>
        </>
    )
}

export default Word

