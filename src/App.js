/* eslint-disable no-unused-vars */
import MemoryGame from './components/MemoryGame';
import './App.css';

const fruitsList = [
  {
    id:0,
    fruitName:"Apple",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/apple.jpg"
  },
  {
    id:1,
    fruitName:"Apricot",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Apricot.jpg"
  },
  {
    id:2,
    fruitName:"Banana",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/banana.jpg"
  },
  {
    id:3,
    fruitName:"Blueberry",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Blueberry.jpg"
  },
  {
    id:4,
    fruitName:"Custard Apple",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Custard%20Apple.jpg"
  },
  {
    id:5,
    fruitName:"Date",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Date.jpg"
  },
  {
    id:6,
    fruitName:"Musk-melon",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Musk-melon.jpeg"
  },
  {
    id:7,
    fruitName:"Mulberry",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Mulberry.jpg"
  },
  {
    id:8,
    fruitName:"Mango",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Mango.jpg"
  },
  {
    id:9,
    fruitName:"Litchi",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Lychee,%20Litchi.jpg"
  },
  {
    id:10,
    fruitName:"Lime",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Lemon,%20Lime.jpg"
  },
  {
    id:11,
    fruitName:"Guva",
    fruitUrl:"https://www.hindimeaning.com/pictures/fruits/Guava.jpg"
  },

]

const App = () => <MemoryGame fruitsList = {fruitsList}/>
export default App;
