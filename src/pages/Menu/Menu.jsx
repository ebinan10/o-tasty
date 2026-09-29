import ChefSpecial from "../../components/home/ChefSpecial";
import SpecialMenu from "../../components/SpecialMenu/SpecialMenu";
import FeaturedDishes from "../../components/home/FeaturedDishes";

const Menu = () => {
  return (
    <div className="min-h-screen">
        <div className="h-[10vh]"/>
      <ChefSpecial/>
      <SpecialMenu/>
      <FeaturedDishes/>
    </div>
  );
};

export default Menu;