import {Component} from 'react'
import {HiSearch} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoItem from '../VideoItem'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import LoadingView from '../LoadingView'
import SideBar from '../SideBar'

import {
  HomeContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  BannerContainer,
  CloseButton,
  BannerImage,
  BannerDescription,
  GetItNowButton,
  BannerDescriptionContainer,
  BannerImgContainer,
} from './styledComponents'

const loadingStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    videoArray: [],
    bannerVisible: true,
    loading: loadingStatus.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({loading: loadingStatus.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({videoArray: updatedData, loading: loadingStatus.success})
    } else {
      this.setState({loading: loadingStatus.failure})
    }
  }

  renderBanner = () => (
    <BannerContainer>
      <CloseButton
        onClick={() => {
          this.setState({bannerVisible: false})
        }}
        data-testid="close"
      >
        <GrFormClose />
      </CloseButton>
      <BannerDescriptionContainer>
        <BannerImgContainer>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
        </BannerImgContainer>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </BannerDescriptionContainer>
    </BannerContainer>
  )

  loadingBasedRender = () => {
    const {loading, videoArray} = this.state
    switch (loading) {
      case loadingStatus.success:
        return (
          <VideosList>
            {videoArray.map(item => (
              <VideoItem details={item} key={item.id} />
            ))}
          </VideosList>
        )
      case loadingStatus.inProgress:
        return <LoadingView />
      default:
        return <ApiFailureView retryFunction={this.getVideos} />
    }
  }

  render() {
    const {searchInput, bannerVisible} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <SideBar />
                <VideosContainer light={theme} data-testid="home">
                  {bannerVisible && this.renderBanner()}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      light={theme}
                      onChange={event => {
                        this.setState({searchInput: event.target.value})
                      }}
                      value={searchInput}
                    />
                    <SearchButton
                      light={theme}
                      data-testid="searchButton"
                      onClick={() => {
                        this.getVideos()
                      }}
                    >
                      <HiSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.loadingBasedRender()}
                </VideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
