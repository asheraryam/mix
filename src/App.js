import React, {useState} from 'react';
import './App.css'
import { blendThings } from './blend'
import { Container, ColorBlock} from './App.style'

const colors = [
  "#FF595E",
  "#FFCA3A" ,
  "#8AC926",
  "#1982C4",
  "#6A4C93"
]


function generateCombos(numberOfColors) {
  let results = [];

  for (let i = 0; i < numberOfColors - 1; i++) {
    for (let j = i + 1; j < numberOfColors; j++) {
      results.push({one: colors[i], two: colors[j]});
    }
  }

  return results;
}

function drawRawColors(numberOfColors) {
  const blocks = [];

  for (let i = 0; i < numberOfColors; i++) {
    blocks.push(<ColorBlock key={`rawColor-${i}`} color={colors[i]} />)
  }

  return blocks;
}

function drawMixedBlocks(numberOfColors) {
  const combos = generateCombos(numberOfColors);
  const blocks = [];

  combos.forEach(combo => {
    for (let i = 1; i <= 100; i++) {
      blocks.push(<ColorBlock key={`color-${combo.one}-${combo.two}-${i}`} color={blendThings(combo.one, combo.two, i)} />)
    }
  })

  return blocks;
}


  // return combos.forEach(combo => {
  //   for (let i = 1; i <= 100; i++) {
  //     return <ColorBlock key={`color-${i}`} color={blendThings(combo.one, combo.two, i)} />
  //   }
  // })

  // return combos.reduce((pv, cv) => { 
  //   const arr = []; 
    
  //   for (let i = 0; i <= 100; i++) { 
  //     arr.push(<ColorBlock key={`color-${i}`} color={blendThings(cv.one, cv.two, i)} />); 
  //   } 
    
  //   return [...pv, ...arr]; }, 
  //   []);




function App() {
  const [numberOfColors, setNumberOfColors] = useState(2);

  return (
    <>
    <button onClick={() => setNumberOfColors(numberOfColors+1)}>Click me</button>
    <Container>
     {drawRawColors(numberOfColors)}
    </Container>
    <Container>
      {drawMixedBlocks(numberOfColors)}
    </Container>

  </>
  )
}

export default App;
