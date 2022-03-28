
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomeFeed from './pages/Home/Home';
import Welcome from './pages/Auth/Welcome';
import Suggestions from './pages/Home/Suggestions';
import Footer from './components/Footer';
import Message from './pages/Message/Messages';
import MessageChat from './pages/Message/Chatpage';
import Notification from './pages/Notifications/Notifications';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/feeds" element={<HomeFeed />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message_chatid" element={<MessageChat />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />}/>
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer auth={true}/>
  </BrowserRouter>
  );
}

export default App;
