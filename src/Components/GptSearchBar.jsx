import React from 'react'
import language from '../Utils/languageTranslation'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    let selectedLang = useSelector((store) => store.config.language)

    return (
        <div className='flex justify-center items-center pt-[8%]'>
            <div className='w-1/2 bg-black py-3'>
                <input type="text" className='border border-black ml-4 mx-6 py-2 px-3 w-3/4' placeholder={language[selectedLang].gptPlaceHolder} /> {/*dynamically change the elements of object using the [] notation*/}
                <button type='submit' className='bg-red-600 text-white py-2 w-32'>{language[selectedLang].search}</button>
            </div>
        </div>
    )
}

export default GptSearchBar