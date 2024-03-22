import React, { useState } from 'react'
import Houses from '@/components/template/Houses'
import { useHouses } from '@/components/context/HousesProvider';
import Pagination from '@/components/template/Pagination';
import Filter from '@/components/template/Filter';

function HouseList() {
  const { houses, routerParams, end, start, handleFilter, currentHouses, handleSort, INIT_SCALE_PAGE } = useHouses();


  return (
    <>
      <Filter handleFilter={handleFilter} handleSort={handleSort} />
      {currentHouses.length == 0 ? <div className='w-full text-white'>Search is Not result</div> : <Houses houses={houses} start={start} end={end} />}
      <Pagination items={houses} scale={INIT_SCALE_PAGE} />
    </>
  )
}

export default HouseList