import { useEffect, useState } from "react";

const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${resId}`
      );
      const json = await data.json();
      

      setResInfo(json.data);
      
    };
    

    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestroMenu;
