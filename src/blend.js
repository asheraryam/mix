import { ColorBlock} from './App.style'

function convertNumberToBase(number, base) {
  return `${(parseInt(number, 10).toString(base))}`;
}

function fromDecimalToHex(d) { return d.toString(16); }  // convert a decimal value to hex

// function convertRgbToHexCode(value1, value2, value3) {
//   const first = convertNumberToBase(value1, 16).replace('0x', '');
//   const second = convertNumberToBase(value2, 16).replace('0x', '');
//   const third = convertNumberToBase(value3, 16).replace('0x', '');
//   return `#${first}${second}${third}`
// }

function fromHexToDecimal(hex) {
  return parseInt(hex, 16);
} 

export function blendThings(color_1, color_2, weight) {

  weight = (typeof(weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = "#";
  color_1 = color_1.replace(/#/g , '');
  color_2 = color_2.replace(/#/g , '');

  for(let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
    let v1 = fromHexToDecimal(color_1.substr(i, 2)), // extract the current pairs
        v2 = fromHexToDecimal(color_2.substr(i, 2)),
        
        // combine the current pairs from each source color, according to the specified weight
        val = fromDecimalToHex(Math.round(v2 + (v1 - v2) * (weight / 100.0))); 

    while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
    
    color += val; // concatenate val to our new color string
  }
    
  return color; // PROFIT!
};


function generateCombos(number, array) {
  let results = [];

  for (let i = 0; i < number - 1; i++) {
    for (let j = i + 1; j < number; j++) {
      results.push({one: array[i], two: array[j]});
    }
  }

  return results;
}

export function drawRawBlocks(number, array) {
  const blocks = [];

  for (let i = 0; i < number; i++) {
    blocks.push(<ColorBlock key={`rawColor-${i}`} color={array[i]} />)
  }

  return blocks;
}

export function drawMixedBlocks(number, array) {    
  const combos = generateCombos(number, array);
  const blocks = [];

  //TODO put a container around each combo somehow
  combos.forEach(combo => {
    for (let i = 1; i <= 100; i+=2) {
      blocks.push(<ColorBlock key={`color-${combo.one}-${combo.two}-${i}`} color={blendThings(combo.one, combo.two, i)} />)
    }
  })

  return blocks;
}