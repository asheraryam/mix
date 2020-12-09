import React, {useState} from 'react';
import './App.css'
import { blendThings } from './blend'
import { Container, ColorBlock} from './App.style'

function generateRandomColorsArray(numberOfColors) {
  const colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    colors.push('#' + Math.floor(Math.random()*16777215).toString(16))
  }

  return colors;
}

function App() {
  const initialColors = [
    "#FF595E",
    "#FFCA3A" ,
    "#8AC926",
    "#1982C4",
    "#6A4C93"
  ]

  const [numberOfColors, setNumberOfColors] = useState(5);
  const [colorsArray, setColorsArray] = useState(initialColors);

  console.log(colorsArray);

  function generateCombos() {
    let results = [];

    for (let i = 0; i < numberOfColors - 1; i++) {
      for (let j = i + 1; j < numberOfColors; j++) {
        results.push({one: colorsArray[i], two: colorsArray[j]});
      }
    }

    return results;
  }

  function drawRawBlocks() {
    console.log('DRAWING RAW COLORS');
    const blocks = [];
  
    for (let i = 0; i < numberOfColors; i++) {
      blocks.push(<ColorBlock key={`rawColor-${i}`} color={colorsArray[i]} />)
    }
  
    return blocks;
  }

  function drawMixedBlocks() {
    const combos = generateCombos(numberOfColors, colorsArray);
    const blocks = [];
  
    combos.forEach(combo => {
      for (let i = 1; i <= 100; i++) {
        blocks.push(<ColorBlock key={`color-${combo.one}-${combo.two}-${i}`} color={blendThings(combo.one, combo.two, i)} />)
      }
    })
  
    return blocks;
  }

  function getNewColors() {
    const newColors = generateRandomColorsArray(numberOfColors);
    setColorsArray(newColors);
  }

  function addNewColor() {
    setNumberOfColors(numberOfColors + 1);
  }

  return (
  <>
    {/* These buttons are experimental and currently break.*/}

    <button onClick={() => getNewColors()}>New colors</button>
    <button onClick={() => addNewColor()}>Add color</button>

    <Container>
      {drawRawBlocks()}
    </Container>
    <Container>
      {drawMixedBlocks()}
    </Container>
  </>
  )
}

export default App;
