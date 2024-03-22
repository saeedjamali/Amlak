import Link from 'next/link'
import React, { useState } from 'react'

function Pagination({ items, scale }) {
    const [page, setPage] = useState(1);
    const handlerClick = (e, index) => {
        e.preventDefault();
        console.log(index)
        setPage(index + 1);
    }

    return (
        <div className='w-full '>
            <ul className='flex items-center justify-center text-white gap-4 mt-16'>
                {Array.from({ length: Math.ceil(items.length / scale) }).map((item, index) =>
                    <li key={index} className={`h-9 w-9 ${page == index + 1 ? "bg-orange-700" : "bg-orange-300"}  p-2 flex items-center justify-center rounded-full`} onClick={(e) => {handlerClick(e,index)}}>
                        <Link href={{
                            pathName: "/houses/[...params]",
                            query: {
                                start: index * scale,
                                end: (index + 1) * scale
                            }

                        }

                        } >{index + 1}</Link>
                    </li>
                )
                }
            </ul>

        </div >
    )
}

export default Pagination