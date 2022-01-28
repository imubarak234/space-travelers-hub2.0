import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Naver from './Components/Navbar';
import Footer from './Components/Footer';
import store from './redux/configureStore';
import MissionsContainer from './Components/missions/MissionsContainer';
import ProfileContainer from './Components/profiles/ProfileContainer';
import RocketContainer from './Components/Rockets/RocketContainer';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Naver />
        <Routes>
          <Route path="/" element={<RocketContainer />} />
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="/my-profile" element={<ProfileContainer />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
