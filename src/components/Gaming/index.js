import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import LoadingView from '../LoadingView'
import {
  GamingContainer,
  GamingVideosContainer,
  GamingHeader,
  GamingHeading,
  GamingIconContainer,
  GamingVideosList,
  GamingVideoItem,
  GamingThumbnail,
  GamingVideoDescription,
  GamingVideoTitle,
  GamingVideoViews,
} from './styledComponents'

const loadingStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: [], loading: loadingStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({loading: loadingStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        loading: loadingStatus.success,
      })
    } else {
      this.setState({loading: loadingStatus.failure})
    }
  }

  render() {
    const {gamingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          const GamingVideo = props => {
            const {details} = props
            const {thumbnailUrl, viewCount, title} = details
            return (
              <GamingVideoItem>
                <GamingThumbnail src={thumbnailUrl} />
                <GamingVideoDescription>
                  <GamingVideoTitle light={theme}>{title}</GamingVideoTitle>
                  <GamingVideoViews
                    light={theme}
                  >{`${viewCount} Watching Worldwide`}</GamingVideoViews>
                </GamingVideoDescription>
              </GamingVideoItem>
            )
          }

          const loadingBasedRender = () => {
            const {loading} = this.state
            switch (loading) {
              case loadingStatus.success:
                return (
                  <>
                    <GamingHeader light={theme}>
                      <GamingIconContainer light={theme}>
                        <SiYoutubegaming />
                      </GamingIconContainer>
                      <GamingHeading light={theme}>Gaming</GamingHeading>
                    </GamingHeader>
                    <GamingVideosList>
                      {gamingVideos.map(item => (
                        <GamingVideo details={item} key={item.id} />
                      ))}
                    </GamingVideosList>
                  </>
                )
              case loadingStatus.inProgress:
                return <LoadingView />
              default:
                return <ApiFailureView retryFunction={this.getTrendingVideos} />
            }
          }

          return (
            <>
              <Header />
              <GamingContainer>
                <SideBar />
                <GamingVideosContainer light={theme} data-testid="gaming">
                  {loadingBasedRender()}
                </GamingVideosContainer>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
