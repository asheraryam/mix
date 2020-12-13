import styled from 'styled-components'

const ButtonElement = styled.button`
  font-family: var(--font-family-main);
  font-size: 1rem;
  padding: 1rem 2rem;
  background: var(--black);
  border-width: 0.25rem;
  border-color: #ffffff;
  border-style: solid;
  color: #ffffff;
  cursor: pointer;
  font-weight: var(--font-weight-med);
  margin: 1rem; 

  &:hover {

  }

  &:active {

  }

  &:focus {
    outline-width: 0;
    box-shadow: 0 0 0 0.25rem var(--color-accent);
    transition: box-shadow .2s ease 0s;
  }
`

export { ButtonElement }