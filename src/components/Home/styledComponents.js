import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
`
export const VideosContainer = styled.div`
  width: 85vw;
  background-color: ${props => (props.light ? '#f9f9f9' : '#181818')};
  padding: 18px;
  overflow-y: auto;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const SearchInput = styled.input`
  height: 28px;
  border: solid ${props => (props.light ? '#cccccc' : '#383838')};
  border-width: 2px 1px 2px 2px;
  width: 250px;
  cursor: pointer;
  outline: none;
  padding: 3px 12px;
  font-family: 'Roboto';
  color: ${props => (props.light ? '#383838' : '#606060')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  background-color: ${props => (props.light ? '#f1f1f1' : 'transparent')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.light ? '#ebebeb' : '#212121')};
  height: 28px;
  width: 48px;
  border: solid ${props => (props.light ? '#cccccc' : '#383838')};
  border-width: 2px 2px 2px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.light ? '#909090' : '#424242')};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  height: 250px;
  width: 100%;
  background-size: cover;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  font-family: 'Roboto';
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border-width: 0;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  outline: none;
`
export const BannerDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`
export const BannerImgContainer = styled.div``

export const BannerImage = styled.img`
  width: 120px;
`

export const BannerDescription = styled.p`
  color: #1e293b;
  font-size: 14px;
  margin-bottom: 36px;
`

export const GetItNowButton = styled.button`
  align-self: flex-start;
  border: solid 2px #1e293b;
  background-color: transparent;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 8px 15px;
  cursor: pointer;
`
