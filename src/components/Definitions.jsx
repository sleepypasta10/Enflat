import React from 'react'
import Word from './definitions/Word';
import Meanings from './definitions/Meanings';

function Definitions({ data, setWord, error }) {
    // console.log(data);
    return (
        <>
            {data ? (
                <div className='mx-auto w-[95%] my-8'>
                    <Word data={data} />
                    <Meanings
                        data={data}
                        setWord={setWord}
                    />
                </div>
            ) : (
                error && (
                    <div className='my-8 text-center'>
                        <h5 className='dark:text-white'>{error && "No Definitions Found"}</h5>
                        <p className='mt-2 text-[var(--gray-color)]'>{error}</p>
                    </div>
                )
            )}
        </>
    )
}

export default Definitions

