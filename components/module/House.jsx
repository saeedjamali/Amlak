import Link from 'next/link'
import React from 'react'

function House({house}) {
    return (
        <div>
            <div className="house col-span-1 bg-orange-200 w-full rounded-md">
                <div className="w-full rounded-t-md">
                    <img className="rounded-t-md" src={house.img} />
                </div>
                <div className="flex flex-col relative ">
                    <span className="w-2/3 text-center bg-stone-800 text-white py-2 inline-block absolute top-[-10%] rounded-l-md">{house.title}</span>
                    <div className="items-center mt-8 p-4 ">
                        <div className="flex items-center justify-start ">
                            <span className="w-1/2 ">تهران</span>
                            <span className="w-1/2">{house.roomCount} اتاق</span>
                        </div>
                        <div className="flex items-center justify-start mt-8">
                            <span className="w-1/2">{house.meterage} متر مربع</span>
                            <span className="w-1/2">{house.price.toLocaleString()} میلیون تومان</span>
                        </div>
                    </div>
                    <Link className="w-full text-center mt-16 bg-stone-500 py-2 text-white rounded-b-md" href={`/houses/${house.id}`}>مشاهده ملک</Link>
                </div>
            </div>

        </div>
    )
}

export default House