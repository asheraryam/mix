/* Problems

1. How do you tell a story with colours?
    -- Should they be 'shades' of colour?
    -- How does this work for colourblind people?
    -- I don't want to generate a random rainbow - I want it to look pleasing

2. How do I fit all colour combinations on the screen at once so the user doesn't have to scroll?
    -- Will I have to create a animated gradient type thing?
    -- What should the maximum colour array length be?

3. How do we display the colours?
    -- Circle?
    -- Canvas type thing?




*/



const colorsArray = ["#FC466B", "#3F5EFB", "#38ef7d", "#FFD200", "#F37335", "#333399", "#24FE41"]

export const StoryData = {
  0: {
    title: 'Title for page 0',
    body: 'Body for page 0',
    colors: colorsArray.slice(0,2)
  },
  1: {
    title: 'Title for page 1',
    body: 'Body for page 1',
    colors: colorsArray.slice(0,3)
  },
  2: {
    title: 'Title for page 2',
    body: 'Body for page 2',
    colors: colorsArray.slice(0,4)
  },
  3: {
    title: 'Title for page 3',
    body: 'Body for page 3',
    colors: colorsArray.slice(0,5)
  },
  4: {
    title: 'Title for page 4',
    body: 'Body for page 4',
    colors: colorsArray.slice(0,6)
  },
  5: {
    title: 'Title for page 5',
    body: 'Body for page 5',
    colors: colorsArray.slice(0,7)
  }
}