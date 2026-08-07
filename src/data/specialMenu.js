import jollof from "../assets/images/menu/jollof.jpg";
import nativeRice from "../assets/images/menu/native-rice.jpg";
import coconutRice from "../assets/images/menu/coconut-rice.jpg";
import concoctionRice from "../assets/images/menu/native-rice.jpg";
import bangaRice from "../assets/images/menu/native-rice.jpg";
import pepperSoup from "../assets/images/menu/pepper-soup.jpg";
import bangaSoup from "../assets/images/menu/banga.jpg";
import egusi from "../assets/images/menu/egusi.jpg";
import grilledFish from "../assets/images/menu/grilledfish.jpg";
import asun from "../assets/images/menu/asun.jpg";
import suya from "../assets/images/menu/suya.jpg";
import chapman from "../assets/images/menu/champman.jpg";

const specialMenu = [
  {
    id: 1,
    name: "Smoky Party Jollof Rice",
    category: "Rice",
    image: jollof,
    price: "₦4,500",
    rating: 4.9,
    description:
      "Classic smoky Nigerian jollof rice served with grilled chicken.",
  },
  {
    id: 2,
    name: "Native Rice",
    category: "Rice",
    image: nativeRice,
    price: "₦4,800",
    rating: 4.9,
    description:
      "Traditional native rice prepared with palm oil and assorted meat.",
  },
  {
    id: 3,
    name: "Coconut Rice",
    category: "Rice",
    image: coconutRice,
    price: "₦5,000",
    rating: 5.0,
    description:
      "Creamy coconut rice served with crispy fried turkey.",
  },
  {
    id: 4,
    name: "Concoction Rice",
    category: "Rice",
    image: concoctionRice,
    price: "₦4,700",
    rating: 4.8,
    description:
      "Traditional palm-oil rice cooked with aromatic local spices.",
  },
  {
    id: 5,
    name: "Banga Rice",
    category: "Rice",
    image: bangaRice,
    price: "₦5,200",
    rating: 4.9,
    description:
      "Flavorful rice cooked with fresh palm fruit extract.",
  },
  {
    id: 6,
    name: "Goat Meat Pepper Soup",
    category: "Soup",
    image: pepperSoup,
    price: "₦4,000",
    rating: 4.9,
    description:
      "Hot spicy pepper soup with tender assorted goat meat.",
  },
  {
    id: 7,
    name: "Banga Soup",
    category: "Soup",
    image: bangaSoup,
    price: "₦5,000",
    rating: 5.0,
    description:
      "Fresh catfish cooked in rich palm fruit soup.",
  },
  {
    id: 8,
    name: "Egusi & Pounded Yam",
    category: "Soup",
    image: egusi,
    price: "₦5,500",
    rating: 5.0,
    description:
      "Rich melon soup served with soft pounded yam.",
  },
  {
    id: 9,
    name: "Grilled Croaker",
    category: "Grill",
    image: grilledFish,
    price: "₦7,500",
    rating: 5.0,
    description:
      "Whole grilled croaker with spicy pepper sauce.",
  },
  {
    id: 10,
    name: "Asun",
    category: "Grill",
    image: asun,
    price: "₦4,500",
    rating: 4.8,
    description:
      "Spicy grilled goat meat tossed in fresh peppers.",
  },
  {
    id: 11,
    name: "Suya Platter",
    category: "Grill",
    image: suya,
    price: "₦5,000",
    rating: 4.9,
    description:
      "Premium northern-style beef suya served with onions.",
  },
  {
    id: 12,
    name: "Chapman",
    category: "Drink",
    image: chapman,
    price: "₦2,000",
    rating: 5.0,
    description:
      "Refreshing classic Nigerian chapman with fresh fruits.",
  },
];

export default specialMenu;