import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {NavItem, NavText} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavItems = props => {
  const {details, isActive} = props
  const {id, name} = details

  let icon
  let path = '/'
  switch (id) {
    case 'HOME':
      icon = <AiFillHome />
      path = '/'
      break
    case 'TRENDING':
      icon = <HiFire />
      path = '/trending'
      break
    case 'GAMING':
      icon = <SiYoutubegaming />
      path = '/gaming'
      break
    default:
      icon = <MdPlaylistAdd />
      path = '/saved-videos'
      break
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, changeActiveTab} = value
        return (
          <Link to={path} className="link-item">
            <NavItem
              active={isActive}
              onClick={() => {
                changeActiveTab(id)
              }}
              light={theme}
            >
              {icon}
              <NavText active={isActive} light={theme}>
                {name}
              </NavText>
            </NavItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NavItems
