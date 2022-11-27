import styled from 'styled-components'

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => {
    if (props.light) {
      return props.active ? '#ff0b37' : '#606060'
    }
    return props.active ? '#ff0000' : '#ffffff'
  }};
  font-size: 18px;
  height: 38px;
  padding-left: 20px;
  background-color: ${props => {
    if (props.light) {
      return props.active ? '#d7dfe9' : '#ffffff'
    }
    return props.active ? '#424242' : '#212121'
  }};
`
export const NavText = styled.p`
  color: ${props => {
    if (props.light) {
      return props.active ? '#00306e' : '#606060'
    }
    return props.active ? '#ffffff' : '#cccccc'
  }};
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`
