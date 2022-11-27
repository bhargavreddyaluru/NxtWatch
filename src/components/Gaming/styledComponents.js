import styled from 'styled-components'

export const GamingContainer = styled.div`
  height: 90vh;
  display: flex;
  font-family: 'Roboto';
`
export const GamingHeader = styled.div`
  background-color: ${props => (props.light ? '#f1f1f1' : '#181818')};
  margin-top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 48px;
`

export const GamingVideosContainer = styled.div`
  width: 85vw;
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
  padding: 0px 0px;
  overflow-y: auto;
`

export const GamingHeading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  margin-left: 18px;
  color: ${props => (props.light ? '#231f20' : '#f9f9f9')};
`

export const GamingIconContainer = styled.div`
  background-color: ${props => (props.light ? '#cbd5e1' : ' #000000')};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.light ? '#ff0b37' : ' #ff0000')};
  font-size: 28px;
`

export const GamingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const GamingVideoItem = styled.li`
  margin: 32px 12px 12px 12px;
`

export const GamingThumbnail = styled.img`
  width: 280px;
`
export const GamingVideoDescription = styled.div``

export const GamingVideoTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.light ? '#231f20' : '#f1f5f9')};
`

export const GamingVideoViews = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.light ? '#7e858e' : '#64748b')};
`
