import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  height: 90vh;
  display: flex;
  font-family: 'Roboto';
`
export const VideoDetailContainer = styled.div`
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
  width: 100%;
  overflow-y: auto;
  padding-bottom: 25px;
  padding: 25px;
`

export const SuccessContainer = styled.div`
  width: 95%;
  font-family: 'Roboto';
`

export const VideoTitleContainer = styled.div``

export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.light ? '#1e293b' : '#f1f5f9')};
  margin-top: 22px;
  margin-bottom: 0;
`

export const ViewsAndLikesContainer = styled.div`
  color: #475569;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewsContainer = styled.div``

export const ViewsCount = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.light ? '#475569' : '#94a3b8')};
`

export const Dot = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #616e7c;
  margin: 0 10px;
`
export const LikesDisLikesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.light ? '#475569' : '#64748b')};
  margin-right: 28px;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border-width: 0;
  font-size: 20px;
  cursor: pointer;
  color: ${props => {
    if (props.active) {
      return props.light ? '#2563eb' : '#64748b'
    }
    return props.light ? '#475569' : '#475569'
  }};
`

export const LikeText = styled.p`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 0;
`
export const HorizontalLine = styled.hr``

export const VideoItemDescriptionContainer = styled.div`
  display: flex;
`

export const ChannelIcon = styled.img`
  width: 45px;
  align-self: flex-start;
  margin-top: 10px;
`
export const ChannelDescriptionContainer = styled.div`
  padding-left: 15px;
`

export const ChannelName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.light ? '#1e293b' : '#f1f5f9')};
  margin-top: 8px;
  margin-bottom: 6px;
  margin-right: 5px;
`
export const Subscribers = styled.p`
  color: ${props => (props.light ? '#64748b' : '#94a3b8')};
  font-size: 14px;
  margin-top: 8px;
`
export const VideoDescription = styled.p`
  color: ${props => (props.light ? '#64748b' : '#f1f5f9')};
  font-size: 16px;
  margin-top: 8px;
`
