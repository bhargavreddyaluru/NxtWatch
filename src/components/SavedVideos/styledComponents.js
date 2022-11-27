import styled from 'styled-components'

export const SavedContainer = styled.div`
  height: 90vh;
  display: flex;
  font-family: 'Roboto';
`
export const SavedHeader = styled.div`
  background-color: ${props => (props.light ? '#f1f1f1' : '#181818')};
  margin-top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 48px;
`

export const SavedVideosContainer = styled.div`
  width: 85vw;
  background-color: ${props => (props.light ? '#f9f9f9' : '#0f0f0f')};
  padding: 0px 0px;
  overflow-y: auto;
`

export const SavedHeading = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  margin-left: 18px;
  color: ${props => (props.light ? '#231f20' : '#f9f9f9')};
`

export const SavedIconContainer = styled.div`
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

export const SavedVideosList = styled.ul`
  list-style-type: none;
`
export const NoSavedVideosContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`

export const NoSavedImage = styled.img`
  width: 400px;
`
export const NoSavedVideosHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 0;
  color: ${props => (props.light ? '#231f20' : ' #f9f9f9')};
`

export const NoSavedVideosDescription = styled.p`
  font-size: 18px;

  color: ${props => (props.light ? '#616e7c' : ' #ebebeb')};
`
