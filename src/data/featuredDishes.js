import jollof from "../assets/images/menu/jollof.jpg";
import peppersoup from "../assets/images/menu/pepper-soup.jpg";
import bangarice from "../assets/images/menu/native-rice.jpg";
import coconut from "../assets/images/menu/coconut-rice.jpg";
import banga from "../assets/images/menu/banga.jpg";

const featuredDishes = [
  {
    id: 1,
    name: "Smoky Jollof Rice",
    image: jollof,
    price: "₦2,500",
    category: "Best Seller",
    rating: 4.9,
    description: "Served with grilled chicken and fried plantain."
  },
  {
    id: 2,
    name: "Goat Pepper Soup",
    image: peppersoup,
    price: "₦4,000",
    category: "Hot & Spicy",
    rating: 4.8,
    description: "Traditional spicy soup prepared with fresh herbs."
  },
  {
    id: 3,
    name: "Concortion rice",
    image: bangarice,
    price: "₦2,000",
    category: "Chef Special",
    rating: 5.0,
    description: "Deliciously cooked banga is ready to pair with Starch or Fufu."
  },
  {
    id: 4,
    name: "Coconut rice",
    image: coconut,
    price: "₦2,500",
    category: "Popular",
    rating: 4.9,
    description: "Tender beef seasoned with authentic northern spices."
  },
  {
      id: 5,
      name: "Banga Soup",
      image: banga,
      price: "₦3,000",
      category: "Popular",
      rating: 4.9,
      description: "Tender beef seasoned with authentic northern spices."
    },

];

export default featuredDishes;