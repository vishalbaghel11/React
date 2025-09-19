import { useState, useEffect } from "react";
const useRestroMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(`https://www.swiggy.com/city/jaipur/abdul-rehaman-chicken-biryani-center-sindhi-camp-gopalbari-rest1037065?restaurant_id=1037065&source=collection&query=Biryani${resId}`);
      const json = await data.json();
      setMenu(json.data); 
    };
    fetchMenu();
  }, [resId]);
  

  return menu;
}
export default useRestroMenu;