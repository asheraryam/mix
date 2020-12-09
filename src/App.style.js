import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #202124;
  flex-wrap: wrap;
`
const ColorBlock = styled.div.attrs(props => ({
  style: {
    background: props.color,
  },
}))`
  width: 60px;
  height: 60px;
  display: flex;
`

export {Container, ColorBlock}