import styled from 'styled-components'

export const TrendingVideoItem = styled.li`
  display: flex;
  margin: 25px 0 50px 0;
  width: 75%;
`

export const TrendingThumbnail = styled.img`
  width: 320px;
`
export const TrendingVideoDescription = styled.div`
  padding: 15px;
`

export const TrendingVideoHeading = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.light ? '#231f20' : '#f1f5f9')};
`

export const TrendingChannelName = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.light ? '#909090' : '#64748b')};
  margin: 14px 5px 0 0;
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
  color: #606060;
`
