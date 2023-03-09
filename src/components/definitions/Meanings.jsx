import React from 'react';
import LinkIcon from '../../assets/images/icon-new-window.svg';

function Meanings({ data, setWord }) {
  return (
    <>
      {data?.map(item => {
        return (
          <>
            {item.meanings?.map((m, index) => (
              <div key={index} className='mb-8'>
                <div className='flex gap-x-2 items-center mt-4'>
                  <p className='text-lg font-bold dark:text-[white]'>
                    {m?.partOfSpeech}
                  </p>
                  <hr className='bg-[var(--light-gray-color)] h-0 w-full'></hr>
                </div>
                <div>
                  <p className='text-sm leading-5 font-[400] text-[var(--gray-color)] mt-5'>
                    Meaning:
                  </p>
                  {/* Definitions & Example */}
                  <ul className='marker:text-[var(--color-primary)] list-disc pl-5 space-y-3 text-[#2d2d2d]'>
                    {m?.definitions?.map((def, index) => (
                      <div
                        key={index}
                        className='text-base md:!text-lg leading-6 font-[400]'>
                        <li className='dark:text-white'>{def?.definition}</li>
                        <p className='text-[var(--gray-color)] pt-3 dark:text-[var(--gray-color)]'>{def?.example}</p>
                      </div>
                    ))}
                  </ul>
                  {/* Synonyms */}
                  {m?.synonyms.length > 0 ? (
                    <div className='flex '>
                      <div className='text-xl text-[#757575] mt-10'>Synonyms:</div>
                      <div className='font-[700] lg:text-lg text-[#A445ED] lg:mt-10 sm:mt-[42px] max-[480px]:mt-[42px] ml-2'>
                        {m?.synonyms?.map((synonym, index) => (
                          <span
                            onClick={(e) => { setWord(synonym) }}
                            className='meanings-synonym hover:underline cursor-pointer'>
                            {synonym}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {/* Antonyms */}
                  {m?.antonyms?.length > 0 ? (
                    <div className='flex'>
                      <div className='text-xl text-[#757575] mt-10'>Antonyms:</div>
                      <div className='font-[700] lg:text-lg  text-[#A445ED] lg:mt-10 sm:mt-[42px] max-[480px]:mt-[42px] ml-2'>
                        {m?.antonyms?.map((antonym, index) => (
                          <span
                            onClick={(e) => { setWord(antonym) }}
                            className='meanings-antonym hover:underline cursor-pointer'>
                            {antonym}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))
            }
            {/* Source */}
            <div className='text-base font-semibold text-[var(--gray-color)] underline mb-2 inline-block'>Source:</div>
            {item?.sourceUrls.length > 0 ? 
              item?.sourceUrls.map((url, index) => (
                <div
                  key={index}
                  className='flex justify-center items-center gap-x-2'
                >
                  <a
                    href={url}
                    target='blank'
                    className='text-[#757575] font-semibold text-sm underline'
                    key={index}
                    rel='noReferrer'
                  >
                    {url}
                  </a>
                  <img src={LinkIcon} alt='' />
                </div>
                ))
            : null}
          </>
        )
      }
      )}
    </>
  )
}

export default Meanings
