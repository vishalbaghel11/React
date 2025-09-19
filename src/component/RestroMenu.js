import useRestroMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = ({ resId }) => {
  const menu = useRestroMenu(resId);

  if (!menu) {
    return <Shimmer />;
  }

  return (
    <div>
      <h1>{menu?.cards[0]?.card?.card?.info?.name}</h1>
    
    </div>
  );
};

export default RestaurantMenu;
