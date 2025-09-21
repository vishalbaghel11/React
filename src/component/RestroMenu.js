import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();  
  const resInfo = useRestroMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = 
    resInfo?.cards[0].card?.card?.info;

 const itemsCards = 
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


console.log("Restaurant Info:", resInfo);


  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
  {itemsCards?.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} - {"Rs."}
      {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    </li>
  ))}
</ul>

    </div>
  );
};

export default RestaurantMenu;
