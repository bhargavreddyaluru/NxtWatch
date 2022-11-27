import styled from 'styled-components'

export const VideoItemDetails = styled.li`
  width: 240px;
  margin-right: 22px;
  margin-bottom: 36px;
`

export const Thumbnail = styled.img`
  width: 100%;
  background-size: cover;
`
export const VideoItemDescriptionContainer = styled.div`
  padding: 5px;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
`
export const VideoNameContainer = styled.div`
  padding-left: 8px;
`

export const ChannelIcon = styled.img`
  width: 30px;
  align-self: flex-start;
  margin-top: 10px;
`
export const VideoTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.light ? '#231f20' : '#f8fafc')};
  height: 40px;
`
export const ChannelName = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${props => (props.light ? '#1e293b' : '#64748b')};
  margin: 0;
  margin-right: 5px;
`
export const ViewsDurationContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`

export const Dot = styled.span`
  font-size: 32px;
  font-weight: bold;
  margin: 0 6px;
`
