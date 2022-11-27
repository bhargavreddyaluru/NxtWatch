import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemDetails,
  Thumbnail,
  VideoItemDescriptionContainer,
  ChannelIcon,
  VideoNameContainer,
  ChannelName,
  VideoTitle,
  Dot,
  ViewsDurationContainer,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {thumbnailUrl, publishedAt, viewCount, title, channel, id} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`videos/${id}`} className="link-item">
            <VideoItemDetails>
              <Thumbnail src={thumbnailUrl} />
              <VideoItemDescriptionContainer>
                <ChannelIcon src={channel.profile_image_url} />
                <VideoNameContainer>
                  <VideoTitle light={theme}>{title}</VideoTitle>
                  <ChannelName light={theme}>{channel.name}</ChannelName>
                  <ViewsDurationContainer>
                    <ChannelName light={theme}>
                      {`${viewCount} views`} <Dot>.</Dot> {publishedAt}
                    </ChannelName>
                  </ViewsDurationContainer>
                </VideoNameContainer>
              </VideoItemDescriptionContainer>
            </VideoItemDetails>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(VideoItem)
