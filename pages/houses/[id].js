import { useRouter } from 'next/router'
import React from 'react'
import { homes } from "../../data/db.json"
import SingleHouse from '@/components/template/SingleHouse';
import { useHouses } from '@/components/context/HousesProvider';

function houses() {

    const { houses, routerParams, end, start } = useHouses();
    console.log("Houses : ", houses, "Route : ", routerParams)
    const { query } = useRouter();
    console.log(query.id)
    const house = homes?.find((home) => home.id == query.id);
    console.log(house)

    if (!house) { return (<div className='bg-white text-purple-400'>Home is Not available</div>) }
    return (
        <div>
            <SingleHouse  {...house} />
        </div>
    )
}

export default houses