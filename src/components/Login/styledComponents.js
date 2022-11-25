import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.light === true ? '#f9f9f9' : '#212121')};
  color: ${props => (props.light ? 'black' : 'white')};
`

export const LoginForm = styled.form`
  height: 420px;
  width: 380px;
  background-color: ${props => (props.light === true ? '#ffffff' : '#0f0f0f')};
  box-shadow: 0px 4px 8px 0px
    ${props => (props.light === true ? '#bfbfbf' : '#212121')};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 28px;
  font-family: 'Roboto';
`
export const Logo = styled.img`
  margin-top: 36px;
  margin-bottom: 40px;
  width: 180px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 18px 8px 18px;
`

export const LabelText = styled.label`
  color: ${props => (props.light === true ? '#606060' : '#ebebeb')};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`
export const UsernameField = styled.input`
  background-color: ${props =>
    props.light === true ? '#ffffff' : 'transparent'};
  border: solid 2px ${props => (props.light === true ? '#ebebeb' : '#383838')};
  padding: 6px 18px 7px 18px;
  border-radius: 4px;
  color: ${props => (props.light === true ? '#616e7c' : '#f1f1f1')};
  font-size: 14px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
`
export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  margin-left: 2px;
  color: ${props => (props.light === true ? '#606060' : '#f1f1f1')};
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 18px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 8px;
  color: #ffffff;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-width: 0;
  font-size: 14px;
  margin-top: 12px;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  margin: 0;
  color: ${props => (props.light === true ? '#ff0000' : '#ff0b37')};
  font-size: 12px;
  margin-top: 6 px;
`
