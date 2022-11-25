import {Component} from 'react'
import Cookies from 'js-cookie'
import {RiMoonFill} from 'react-icons/ri'
import {HiOutlineSun} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  WebSiteLogo,
  ThemeChangeContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, changeTheme} = value
          const url = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <HeaderContainer light={theme}>
              <WebSiteLogo src={url} alt="website logo" />
              <ThemeChangeContainer>
                <ThemeButton
                  data-testid="theme"
                  onClick={() => changeTheme()}
                  light={theme}
                >
                  {theme ? <RiMoonFill /> : <HiOutlineSun />}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutButton onClick={this.onClickLogout} light={theme}>
                  Logout
                </LogoutButton>
              </ThemeChangeContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
