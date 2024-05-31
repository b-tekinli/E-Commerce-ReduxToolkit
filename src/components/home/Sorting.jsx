import React from 'react'

const Sorting = () => {
    return (
        <div className='my-5 p-5 bg-gray-100 flex justify-end items-center'>
            <select className="bg-white py-3 px-5" name="" id="">
                <option disabled value="">Seçiniz</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>
    )
}

export default Sorting;
