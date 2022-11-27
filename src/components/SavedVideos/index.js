import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import TrendingOrSavedVideo from '../TrendingOrSavedVideo'
import {
  SavedContainer,
  SavedVideosContainer,
  SavedHeader,
  SavedHeading,
  SavedIconContainer,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, savedVideos} = value
          const savedBasedRender = () => {
            if (savedVideos.length === 0) {
              return (
                <NoSavedVideosContainer>
                  <NoSavedImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosDescription>
                    You can save your videos while watching them
                  </NoSavedVideosDescription>
                </NoSavedVideosContainer>
              )
            }
            return (
              <>
                <SavedHeader light={theme}>
                  <SavedIconContainer light={theme}>
                    <MdPlaylistAdd />
                  </SavedIconContainer>
                  <SavedHeading light={theme}>Saved Videos</SavedHeading>
                </SavedHeader>
                <SavedVideosList>
                  {savedVideos.map(item => (
                    <TrendingOrSavedVideo details={item} key={item.id} />
                  ))}
                </SavedVideosList>
              </>
            )
          }

          return (
            <>
              <Header />
              <SavedContainer>
                <SideBar />
                <SavedVideosContainer light={theme} test-id="savedVideos">
                  {savedBasedRender()}
                </SavedVideosContainer>
              </SavedContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
