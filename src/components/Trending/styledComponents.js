import styled from 'styled-components'

export const TrendingContainer = styled.div`
  height: 90vh;
  display: flex;
  font-family: 'Roboto';
`
export const TrendingHeader = styled.div`
  background-color: ${props => (props.light ? '#f1f1f1' : '#181818')};
  margin-top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 48px;
`

export const TrendingVideosContainer = styled.div`
  width: 85vw;
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
  padding: 0px 0px;
  overflow-y: auto;
`

export const TrendingHeading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  margin-left: 18px;
  color: ${props => (props.light ? '#231f20' : '#f9f9f9')};
`

export const TrendingIconContainer = styled.div`
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

export const TrendingVideosList = styled.ul`
  list-style-type: none;
`
