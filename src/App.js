import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true, activeTabId: 'HOME', savedVideos: []}

  changeActiveTab = id => {
    this.setState({activeTabId: id})
  }

  addSavedVideos = details => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, details],
    }))
  }

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  render() {
    const {lightTheme, activeTabId, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme: lightTheme,
          activeTabId,
          savedVideos,
          changeTheme: this.changeTheme,
          changeActiveTab: this.changeActiveTab,
          addSavedVideos: this.addSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
