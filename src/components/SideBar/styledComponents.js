import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.light ? '#ffffff' : '#212121')};
`
export const NavItemsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const ContactUsContainer = styled.div`
  padding: 0 25px 10px 20px;
  font-family: 'Roboto';
  color: ${props => (props.light ? '#1e293b' : '#ffffff')};
`

export const ContactUsHeading = styled.h1`
  font-size: 13px;
  margin-bottom: 22px;
`

export const IconsContainer = styled.div``

export const ContactIcon = styled.img`
  width: 25px;
  margin-right: 13px;
`

export const ContactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0 15px 0;
  color: ${props => (props.light ? '#1e293b' : '#ffffff')};
`
