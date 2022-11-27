import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import LoadingView from '../LoadingView'
import TrendingOrSavedVideo from '../TrendingOrSavedVideo'
import {
  TrendingContainer,
  TrendingVideosContainer,
  TrendingHeader,
  TrendingHeading,
  TrendingIconContainer,
  TrendingVideosList,
} from './styledComponents'

const loadingStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideos: [], loading: loadingStatus.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({loading: loadingStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: item.channel,
        id: item.id,
        title: item.title,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))
      this.setState({
        trendingVideos: updatedData,
        loading: loadingStatus.success,
      })
    } else {
      this.setState({loading: loadingStatus.failure})
    }
  }

  render() {
    const {trendingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, changeActiveTab} = value
          const loadingBasedRender = () => {
            const {loading} = this.state
            switch (loading) {
              case loadingStatus.success:
                return (
                  <>
                    <TrendingHeader light={theme}>
                      <TrendingIconContainer light={theme}>
                        <HiFire />
                      </TrendingIconContainer>
                      <TrendingHeading light={theme}>Trending</TrendingHeading>
                    </TrendingHeader>
                    <TrendingVideosList>
                      {trendingVideos.map(item => (
                        <TrendingOrSavedVideo details={item} key={item.id} />
                      ))}
                    </TrendingVideosList>
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
              <TrendingContainer>
                <SideBar />
                <TrendingVideosContainer light={theme} data-testid="trending">
                  {loadingBasedRender()}
                </TrendingVideosContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
