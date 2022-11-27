import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingVideoItem,
  TrendingThumbnail,
  TrendingVideoDescription,
  TrendingVideoHeading,
  TrendingChannelName,
  ViewsDurationContainer,
  Dot,
} from './styledComponents'

const TrendingOrSavedVideo = props => {
  const {details} = props
  const {thumbnailUrl, publishedAt, viewCount, title, channel, id} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`videos/${id}`} className="link-item">
            <TrendingVideoItem>
              <TrendingThumbnail src={thumbnailUrl} />
              <TrendingVideoDescription>
                <TrendingVideoHeading light={theme}>
                  {title}
                </TrendingVideoHeading>
                <TrendingChannelName light={theme}>
                  {channel.name}
                </TrendingChannelName>
                <ViewsDurationContainer>
                  <TrendingChannelName light={theme}>
                    {`${viewCount} views`} <Dot>.</Dot> {publishedAt}
                  </TrendingChannelName>
                </ViewsDurationContainer>
              </TrendingVideoDescription>
            </TrendingVideoItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingOrSavedVideo
