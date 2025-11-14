import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import UserProfile from './components/UserProfile.jsx'
import UserContext from './context/UserContext.js'
import Profilepage from './components/Profilepage.jsx'


function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  }

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}>
        <Profilepage />
      </UserContext.Provider>
      
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  )
}

export default App
