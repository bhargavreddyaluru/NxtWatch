import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import ApiFailureView from '../ApiFailureView'
import LoadingView from '../LoadingView'
import {
  VideoDetailsContainer,
  VideoDetailContainer,
  SuccessContainer,
  VideoTitleContainer,
  VideoTitle,
  ViewsAndLikesContainer,
  ViewsContainer,
  ViewsCount,
  Dot,
  LikesDisLikesContainer,
  LikeContainer,
  LikeButton,
  LikeText,
  HorizontalLine,
  VideoItemDescriptionContainer,
  ChannelIcon,
  ChannelDescriptionContainer,
  ChannelName,
  Subscribers,
  VideoDescription,
} from './styledComponents'

const loadingStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    loading: loadingStatus.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({loading: loadingStatus.inProgress, videoDetails: {}})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const item = data.video_details
      const updatedData = {
        channel: item.channel,
        id: item.id,
        title: item.title,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
        description: item.description,
        videoUrl: item.video_url,
      }
      this.setState({
        loading: loadingStatus.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({loading: loadingStatus.failure})
    }
  }

  render() {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, addSavedVideos, savedVideos} = value

          const saveClicked = () => {
            if (savedVideos.includes(videoDetails)) {
              this.setState(prevState => ({
                isSaved: !prevState.isSaved,
              }))
            } else {
              addSavedVideos({...videoDetails})
              this.setState(prevState => ({
                isSaved: !prevState.isSaved,
              }))
            }
          }

          const renderLikesDisLikes = () => (
            <LikesDisLikesContainer>
              <LikeContainer>
                <LikeButton
                  active={isLiked}
                  onClick={() => {
                    this.setState(prevState => ({
                      isLiked: !prevState.isLiked,
                    }))
                  }}
                  light={theme}
                >
                  <BiLike />
                </LikeButton>
                <LikeText>Like</LikeText>
              </LikeContainer>
              <LikeContainer>
                <LikeButton
                  active={isDisliked}
                  onClick={() => {
                    this.setState(prevState => ({
                      isDisliked: !prevState.isDisliked,
                    }))
                  }}
                  light={theme}
                >
                  <BiDislike />
                </LikeButton>
                <LikeText>Dislike</LikeText>
              </LikeContainer>
              <LikeContainer>
                <LikeButton
                  active={isSaved || savedVideos.includes(videoDetails)}
                  onClick={saveClicked}
                  light={theme}
                >
                  <MdPlaylistAdd />
                </LikeButton>
                <LikeText>Save</LikeText>
              </LikeContainer>
            </LikesDisLikesContainer>
          )

          const renderSuccessView = () => (
            <SuccessContainer>
              <ReactPlayer
                url={videoDetails.videoUrl}
                width="100%"
                height="480px"
              />
              <VideoTitleContainer>
                <VideoTitle light={theme}>{videoDetails.title}</VideoTitle>
                <ViewsAndLikesContainer>
                  <ViewsContainer>
                    <ViewsCount>
                      {`${videoDetails.viewCount} views`}
                      <Dot>.</Dot>
                      {videoDetails.publishedAt}
                    </ViewsCount>
                  </ViewsContainer>
                  {renderLikesDisLikes()}
                </ViewsAndLikesContainer>
              </VideoTitleContainer>
              <HorizontalLine />
              <VideoItemDescriptionContainer>
                <ChannelIcon src={videoDetails.channel.profile_image_url} />
                <ChannelDescriptionContainer>
                  <ChannelName light={theme}>
                    {videoDetails.channel.name}
                  </ChannelName>
                  <Subscribers>
                    {`${videoDetails.channel.subscriber_count} subscribers`}{' '}
                  </Subscribers>
                  <VideoDescription light={theme}>
                    {videoDetails.description}
                  </VideoDescription>
                </ChannelDescriptionContainer>
              </VideoItemDescriptionContainer>
            </SuccessContainer>
          )

          const loadingBasedRender = () => {
            const {loading} = this.state
            switch (loading) {
              case loadingStatus.success:
                return renderSuccessView()
              case loadingStatus.inProgress:
                return <LoadingView />
              default:
                return <ApiFailureView retryFunction={this.getVideoDetails} />
            }
          }
          return (
            <>
              <Header />
              <VideoDetailsContainer>
                <SideBar />
                <VideoDetailContainer
                  data-testid="videoItemDetails"
                  light={theme}
                >
                  {loadingBasedRender()}
                </VideoDetailContainer>
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
