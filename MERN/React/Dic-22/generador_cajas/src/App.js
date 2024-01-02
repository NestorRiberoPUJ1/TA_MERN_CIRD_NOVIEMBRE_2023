import './App.css';
import { useState } from 'react';
import BoxGenerator from './components/BoxGenerator/BoxGenerator';
import Tabs from './components/Tabs/Tabs';


const Boxes = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(200);

  const [boxes, setBoxes] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);

    setBoxes((prev) => {
      prev.push({ color: color, size: Number.parseInt(size) });
      return [...prev];
    })
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colorIpt">Color</label>
          <input type="color" name="color" id="colorIpt" value={color} onChange={(e) => setColor(e.target.value)} />
          <input type="text" name="colorTxt" id="colorTxtIpt" readOnly value={color} />
        </div>
        <div>
          <label htmlFor="sizeIpt">Size</label>
          <input type="number" name="size" id="sizeIpt" value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <button type="submit">Crear</button>
      </form>


      <div className='Container'>
        {
          boxes.map((item, idx) => {
            return (
              <BoxGenerator key={idx} color={item.color} size={item.size} />
            )

          })
        }

      </div>



    </div>
  );
}



function App() {

  return (
    <Tabs />
  )

}

export default App;
