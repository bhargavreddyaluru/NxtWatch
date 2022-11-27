import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginForm,
  BgContainer,
  Logo,
  InputContainer,
  LabelText,
  UsernameField,
  ShowPasswordContainer,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, error: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({error: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          const url = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <BgContainer light={theme}>
              <LoginForm light={theme} onSubmit={this.onSubmitForm}>
                <Logo src={url} alt="website logo" />
                <InputContainer>
                  <LabelText htmlFor="userName" light={theme}>
                    USERNAME
                  </LabelText>
                  <UsernameField
                    type="text"
                    placeholder="Username"
                    id="userName"
                    light={theme}
                    onChange={event => {
                      this.setState({username: event.target.value})
                    }}
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelText htmlFor="password" light={theme}>
                    PASSWORD
                  </LabelText>
                  <UsernameField
                    light={theme}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={event => {
                      this.setState({password: event.target.value})
                    }}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <UsernameField
                    type="checkbox"
                    id="showPassword"
                    onChange={event => {
                      this.setState({showPassword: event.target.checked})
                    }}
                  />
                  <ShowPasswordLabel htmlFor="showPassword" light={theme}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <InputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {error !== '' && (
                    <ErrorMsg light={theme}>{`*${error}`}</ErrorMsg>
                  )}
                </InputContainer>
              </LoginForm>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
