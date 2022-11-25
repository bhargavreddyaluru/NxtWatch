import {Component} from 'react'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

const navList = [
  {id: 'HOME', name: 'Home'},
  {id: 'TRENDING', name: 'Trending'},
  {id: 'GAMING', name: 'Gaming'},
  {id: 'SAVED_VIDEOS', name: 'Saved videos'},
]

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightTheme} = value
          return (
            <>
              <Header />
              <h1>Home</h1>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
