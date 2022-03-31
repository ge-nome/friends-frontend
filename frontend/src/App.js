
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import HomeFeed from './pages/Home/Home';
//<<<<<<< HEAD
import Welcome from './pages/Home/Welcome';
//=======
//import Welcome from './pages/Auth/Welcome';
import Suggestions from './pages/Home/Suggestions';
//>>>>>>> e19327f272ab96b7a4827503f0504b27351da550
import Footer from './components/Footer';
import Message from './pages/Message/Messages';
import MessageChat from './pages/Message/Chatpage';
import Notification from './pages/Notifications/Notifications';
import Profile from './pages/Profile';
import AddPost from './pages/AddPost';
import { Provider } from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={ store }>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/feeds" element={<HomeFeed />} />
        <Route path="/message" element={<Message />} />
        <Route path="/message_chatid" element={<MessageChat />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />}/>
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat/:id" element={<MessageChat />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
