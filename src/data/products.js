import ricecereal from "../assets/images/categories/rice-cereals.png";
import bananapuree from "../assets/images/categories/bananapuree.png";
import mangopuree from "../assets/images/categories/mangopuree.png";
import oatmealcereal from "../assets/images/categories/oat-meal.png";
import carriot from "../assets/images/categories/carriot-puree.png";
import pear from "../assets/images/categories/pear-puree.png";
import ricechicken from "../assets/images/categories/ricenchicken-puree.png"
import pumpkin from "../assets/images/categories/pumpkin-puree.png";
import vegetable from "../assets/images/categories/vegetable-puree.png";

const products = [
  {
    id: 1,
    title: "Organic Rice Cereal",
    description: "Iron-fortified rice cereal perfect for first meals.",
    price: 4500,
    image: ricecereal,
    rating: 5,
    category: "Cereals",
    age: "4-6 Months",
    featured: true,
  },
  {
    id: 2,
    title: "Apple Banana Puree",
    description: "Fresh apples blended with ripe bananas.",
    price: 3800,
    image: bananapuree,
    rating: 5,
    category: "Fruit",
    age: "6+ Months",
    featured: true,
  },
  {
    id: 3,
    title: "Carrot Sweet Potato",
    description: "Vitamin-rich vegetable puree for growing babies.",
    price: 4200,
    image: carriot,
    rating: 4,
    category: "Vegetables",
    age: "6+ Months",
    featured: true,
  },
  {
    id: 4,
    title: "Chicken Rice Meal",
    description: "Protein-packed meal made for active babies.",
    price: 5600,
    image: ricechicken,
    rating: 5,
    category: "Protein",
    age: "8+ Months",
    featured: true,
  },
  {
    id: 5,
    title: "Pumpkin Carrot Puree",
    description: "A naturally sweet vegetable blend.",
    price: 4000,
    image: pumpkin,
    rating: 5,
    category: "Vegetables",
    age: "6+ Months",
    featured: true,
  },
  {
    id: 6,
    title: "Pear Peach Puree",
    description: "Smooth fruit puree full of natural goodness.",
    price: 3900,
    image: pear,
    rating: 5,
    category: "Fruit",
    age: "6+ Months",
    featured: true,
  },
  {
      id:7 ,
      title: "Oatmeal Baby Cereal",
      price:5000,
      image: oatmealcereal,
      age: "6+ Months",
      category: "Baby Cereals",
      featured: true,
      description:
        "Creamy whole-grain oatmeal cereal packed with fiber, essential vitamins, and minerals to support healthy growth, energy, and digestion for growing babies."

  },
  {
      id: 8,
      title: "Mango Puree",
      image: mangopuree,
      age: "6+ Months",
      category: "Baby Cereals",
      price:3600,
      featured:true,
      description:
        "Made from juicy, sun-ripened mangoes, this silky puree is rich in Vitamin A and Vitamin C, providing a refreshing and nutritious fruit meal for babies."

  },
  {
      id: 9,
      title: "Mixed Vegetable Puree",
      image: vegetable,
      age: "7+ Months",
      category: "Baby Cereals",
      featured:true,
      price:4800,
      description:
        "A balanced blend of carefully selected vegetables including carrots, peas, broccoli, and pumpkin, providing a variety of nutrients in every spoonful."

  }
];

export default products;