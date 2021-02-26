import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [applicationData, applicationDataHandler] = useState([])
  useEffect(() => {
    const getAppData = async () => {
      const postsList = await fetchPost()
      const userList = await fetchUserList()
      applicationDataHandler({ postsList, userList });
    }
    getAppData()
  }, [])

  const fetchPost = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    return res.data;
  }

  const fetchUserList = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/users')
    return res.data
  }

  return (
    <div>
      <Router>

        <Header />
        <Container>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/" exact>
                {applicationData.postsList && applicationData.userList ? <Home allData={applicationData} /> : ''}
              </Route>
            </Switch>
          </div>
        </Container>

      </Router>
    </div>
  );
}

export default App;
