import React from "react";
import Carousel from "../Components/Carousel";

const carouselItems = [
  {
    title: "Item 1",
    imageUrl:
      "https://images.pexels.com/photos/20189629/pexels-photo-20189629/free-photo-of-a-vase-of-yellow-tulips-sits-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of item 1",
  },
  {
    title: "Item 2",
    imageUrl:
      "https://images.pexels.com/photos/20189629/pexels-photo-20189629/free-photo-of-a-vase-of-yellow-tulips-sits-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // imageUrl:
    //   "https://images.pexels.com/photos/7605106/pexels-photo-7605106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of item 2",
  },
  {
    title: "Item 3",
    imageUrl:
      "https://images.pexels.com/photos/20189629/pexels-photo-20189629/free-photo-of-a-vase-of-yellow-tulips-sits-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // imageUrl:
    //   "https://images.pexels.com/photos/20442701/pexels-photo-20442701/free-photo-of-selective-focus-photo-of-autumnal-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Description of item 3",
  },
];

function HomePage() {
  return (
    <div>
      <p>{"Hello World"}</p>
      <Carousel items={carouselItems} />
    </div>
  );
}

export default HomePage;
