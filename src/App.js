import './App.css'
import React, {useState} from 'react';
import { Container } from './App.style'
import { Button } from './components/Button'
import { ButtonRow } from './App.style'
import { StoryPage} from './components/StoryPage'

import { drawMixedBlocks, drawRawBlocks } from './blend'

import { StoryData } from './StoryData'

function generateRandomColorsArray(numberOfColors) {
  const colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    colors.push('#' + Math.floor(Math.random()*16777215).toString(16))
  }

  return colors;
}

function App() {
  const initialColors = [
    "#f11012",
    "#ffb626"
  ]

  const LAST_STORY_PAGE = 5;

  const [numberOfColors, setNumberOfColors] = useState(2);
  const [colorsArray, setColorsArray] = useState(initialColors);

  const [currentStoryPage, setCurrentStoryPage] = useState(0);
  const storyInProgress = currentStoryPage <= LAST_STORY_PAGE;


  function getNewColors() {
    const newColors = generateRandomColorsArray(numberOfColors);
    setColorsArray(newColors);
  }

  function addNewColor() {
    setNumberOfColors(numberOfColors + 1);
    const newColorsArray = [...colorsArray, generateRandomColorsArray(1).pop()];
    setColorsArray(newColorsArray);
  }

  function previousStoryPage() {
    setCurrentStoryPage(currentStoryPage - 1);
  }

  function nextStoryPage() {
    setCurrentStoryPage(currentStoryPage + 1);
  }

  function resetStory() {
    setCurrentStoryPage(0)
  }

 

  return (
  <>

<Button onClick={() => resetStory()}>Reset</Button>

    {storyInProgress && (
      <>
        <ButtonRow>
            <Button onClick={() => previousStoryPage()}>Previous</Button>
            <Button onClick={() => nextStoryPage()}>Next</Button>
        </ButtonRow>

        <StoryPage pageNumber={currentStoryPage} 
                   title={StoryData[currentStoryPage].title} 
                   body={StoryData[currentStoryPage].body}
                   colors={StoryData[currentStoryPage].colors}
        />
      </>
    )}

    {!storyInProgress && (
        <>
          <ButtonRow>
            <Button onClick={() => getNewColors()}>Generate new colors</Button>
            <Button onClick={() => addNewColor()}>Add new color</Button>
          </ButtonRow>

          <Container>
            {drawRawBlocks(numberOfColors, colorsArray)}
          </Container>
          <Container>
            {drawMixedBlocks(numberOfColors, colorsArray)}
          </Container>
        </>
    )}
  </>
  )
}

export default App;
