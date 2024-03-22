import House from "@/components/module/House";
import { useHouses } from "@/components/context/HousesProvider";
import Houses from "@/components/template/Houses";

export default function Home() {
  const { houses, routerParams, start, end } = useHouses();
  return (
    <>
      <Houses houses={houses} start={start} end={end} />
    </>


  );
}
