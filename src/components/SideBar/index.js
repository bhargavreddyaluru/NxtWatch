import {withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import NavItems from '../NavItems'
import {
  NavBar,
  NavItemsList,
  ContactUsContainer,
  ContactUsHeading,
  IconsContainer,
  ContactIcon,
  ContactDescription,
} from './styledComponents'

const navList = [
  {id: 'HOME', name: 'Home'},
  {id: 'TRENDING', name: 'Trending'},
  {id: 'GAMING', name: 'Gaming'},
  {id: 'SAVED_VIDEOS', name: 'Saved videos'},
]

const ContactUs = props => {
  const {theme} = props
  return (
    <ContactUsContainer light={theme}>
      <ContactUsHeading>CONTACT US</ContactUsHeading>
      <IconsContainer>
        <ContactIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <ContactIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <ContactIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </IconsContainer>
      <ContactDescription light={theme}>
        Enjoy! Now to see your channels and recommendations!
      </ContactDescription>
    </ContactUsContainer>
  )
}

const SideBar = props => {
  const {history} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, activeTabId} = value
        return (
          <NavBar light={theme}>
            <NavItemsList>
              {navList.map(item => (
                <NavItems
                  details={item}
                  key={item.id}
                  isActive={activeTabId === item.id}
                />
              ))}
            </NavItemsList>
            <ContactUs theme={theme} />
          </NavBar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SideBar)
