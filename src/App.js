import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Container from 'react-bootstrap/Container';
import { useState, useEffect} from 'react'
import { useDispatch,useStore ,useSelector } from "react-redux";


import { getData } from "./redux/actions/PostActions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [applicationData, applicationDataHandler] = useState([])
  const dispatch = useDispatch();
  const store = useStore()
  console.log (store,'store')
  useEffect(() => {
    const getAppData = async () => {
       dispatch(getData())
      
      console.log (postsList,'postsList')
      const userList = await fetchUserList()
      applicationDataHandler({ postsList, userList });
    }
    getAppData()

  }, [])
  const postsList = useSelector(state => state.postsList)
  // console.log (store.getState(),'store')
 console.log (postsList,'postsList')

  const fetchUserList = async () => {
    // const res = await axios(`${baseURL}users`)
    // return res.data
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
                {applicationData.postsList && applicationData.userList && <Home allData={applicationData} />}
              </Route>
            </Switch>
          </div>
        </Container>

      </Router>
    </div>
  );
}

export default App;
