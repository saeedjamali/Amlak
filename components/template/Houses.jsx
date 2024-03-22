import React from 'react'
import House from '../module/House'


function Houses({houses,start,end}) {
    return (
        <div>
        <div className="home-details w-full mt-16 ">
          <div className="houses grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">

            {houses?.slice(start,end).map((house) =>
              <House id={house.id} house={house} />
            )} 

          </div>
        </div>
      </div>
    )
}

export default Houses