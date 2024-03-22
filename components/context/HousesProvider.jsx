import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { homes } from "../../data/db.json"

const HousesContext = createContext();
const INIT_COUNT_ITEM = 2;
const INIT_SCALE_PAGE = 1;
function HousesProvider({ children }) {

    const [houses, setHouses] = useState(homes);
    const routerParams = useRouter();
    const start = routerParams.query?.start || 0;
    const end = routerParams.query?.end || INIT_COUNT_ITEM;
    let currentHouses = houses;
    const handleFilter = (str) => {
        currentHouses = [...homes]?.filter(house => house.title.includes(str));
        setHouses(currentHouses);
    }

    const handleSort = (sortBy) => {

        if (sortBy == "toMin") {
            const sortedHouse = [...houses].sort((a, b) => (a.price > b.price ? -1 : 1));
            console.log(sortedHouse)
            setHouses(sortedHouse)
        } else {
            setHouses([...houses].sort((a, b) => (a.price > b.price ? 1 : -1)))
        }

    }

    return (
        <HousesContext.Provider value={{ houses, routerParams, start, end, handleFilter, currentHouses, handleSort, INIT_SCALE_PAGE }}>{children}</HousesContext.Provider>
    )



}

export default HousesProvider;

export function useHouses() {
    return useContext(HousesContext)
}
