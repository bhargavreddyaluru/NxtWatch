import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  activeTabId: 'HOME',
  changeTheme: () => {},
  changeActiveTab: () => {},
  savedVideos: [],
  addSavedVideos: () => {},
})

export default ThemeContext
