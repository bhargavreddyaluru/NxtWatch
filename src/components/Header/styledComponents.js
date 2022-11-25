import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.light ? '#ffffff' : '#212121')};
  justify-content: space-between;
  padding: 18px 32px 20px 32px;
  border: solid black 1px;
  font-family: 'Roboto';
`

export const WebSiteLogo = styled.img`
  width: 90px;
`
export const ThemeChangeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => (props.light ? '#212121' : '#ffffff')};
`
export const ProfileImage = styled.img`
  width: 25px;
  margin: 0 25px 0 25px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: solid 2px ${props => (props.light ? '#3b82f6' : '#ebebeb')};
  border-radius: 5px;
  color: ${props => (props.light ? '#3b82f6' : '#ebebeb')};
  font-family: 'Roboto';
  font-weight: 500;
  padding: 4px 15px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`
