import ThemeContext from '../../context/ThemeContext'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const ApiFailureView = props => {
  const {retryFunction} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const url = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={url} />
            <FailureHeading light={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription light={theme}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailureDescription>
            <RetryButton
              onClick={() => {
                retryFunction()
              }}
            >
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ApiFailureView
