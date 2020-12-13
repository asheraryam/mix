import React from 'react';
import PropTypes from 'prop-types';
import { StoryPageContainer, StoryPageTitle, StoryPageBody, StoryPageNumber } from './index.style';
import { drawMixedBlocks, drawRawBlocks } from '../../blend'
import { Container } from '../../App.style'

const StoryPage = ({pageNumber, title, body, colors}) => {
  return (
    <StoryPageContainer>

      <Container>
        {drawRawBlocks(colors.length, colors)}
      </Container>
      <Container>
        {drawMixedBlocks(colors.length, colors)}
      </Container>

      <StoryPageNumber>
        {pageNumber}
      </StoryPageNumber>

      <StoryPageTitle>
        {title}
      </StoryPageTitle>

      <StoryPageBody>
        {body}
      </StoryPageBody>

    </StoryPageContainer>
  )
}

StoryPage.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export { StoryPage }