import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


function Filter({ handleFilter, handleSort }) {

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const onSearch = (e) => {
        setSearch(e.target.value.trim())
    }

    const onSort = (e) => {
        setSortBy(e.target.value);


    }
    useEffect(() => {
        handleFilter(search);
    }, [search]);

    useEffect(() => {
        handleSort(sortBy);
    }, [sortBy]);


    return (
        <div className='w-full h-24 flex items-center justify-between '>
            <div className='w-full '>
                <select className='w-2/3 p-2' onClick={onSort}>
                    <option value="toMin">بیشترین قیمت</option>
                    <option value="toMax">کمترین قیمت</option>
                </select>
            </div>
            <div className='w-full '>
                <input className="outline-none p-2 w-2/3 h-full rounded-md" type="text" name="" placeholder='جستجو' id="" onChange={onSearch} />
            </div>
        </div>
    )
}

export default Filter