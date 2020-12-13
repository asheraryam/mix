import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export {Container, ColorBlock, ButtonRow}