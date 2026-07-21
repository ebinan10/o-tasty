import jollof from "../assets/images/jollof-rice.jpg";
import nativeRice from "../assets/images/native-rice.jpg";
import coconutRice from "../assets/images/coconut-rice-fried-turkey.jpg";
import concoctionRice from "../assets/images/concoction-rice.jpg";
import bangaRice from "../assets/images/banga-rice.jpg";
import pepperSoup from "../assets/images/goat-pepper-soup.jpg";
import bangaSoup from "../assets/images/banga-catfish.jpg";
import egusi from "../assets/images/egusi-pounded-yam.jpg";
import grilledFish from "../assets/images/grilled-fish.jpg";
import asun from "../assets/images/asun.jpg";
import suya from "../assets/images/suya-platter.jpg";
import chapman from "../assets/images/chapman.jpg";

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