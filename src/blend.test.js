import { blendThings } from './blend'
test('Add #ff0000 with #ffff00', () => {
  const result = blendThings('#ff0000', '#ffff00 ');
  expect(result).toBe('#ff8000');
})

test('Blend  mix(#69585F, #D9DBBC, 75%);', () => {
  const result = blendThings('#69585F', '#D9DBBC ', 75);
  expect(result).toBe('#857976');
})

test('Blend  mix(#000000, #ffffff, 75%);', () => {
  const result = blendThings('#000000', '#ffffff ');
  expect(result).toBe('#808080');
})

test('Blend mix(#FCDDBC, #EF959D);', () => {
  const result = blendThings('#FCDDBC', '#EF959D ');
  expect(result).toBe('#f6b9ad');
})