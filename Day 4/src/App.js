import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //using the installed router 'npm install react-router-dom' and we will use the three shown beside the 'as'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from "./firebase";

function App() {

  const [rooms, setRooms] = useState([])  //useState is a database
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user'))); //cretes a state and gets a value as user: 'setUser', then isnide it converts from a stringto an object


  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => { //gets collection 'rooms' previously created on firebase. And 'snapshot' refers to the info it has.
      // console.log(snapshot.docs);  //if you inspect the webpage, you'll see the section of 'Console' this will be were it prints the snapshot. It is the equivallent of print().
      // snapshot.docs.map((doc) => { //to check in console that info is been transfer uncomment this
      //   console.log(doc.data())
      // })
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })

  }

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() =>{  //the function getChannels will be run multiple times, therefore we use this fucntion from react.
    getChannels();
  }, [])

  return (
    <div className="App">
      <Router>
      {
          !user ?
          <Login setUser={setUser}/>  //if the user doesn't exist, then it will go to login.
          :
          <Container>
            <Header signOut={signOut} user={user} />
            <Main>
              <Sidebar  rooms={rooms}  /> 
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path="/">
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: grid;
  grid-template-rows: 38px minmax(0,1fr); //the minmax will prevent us from having scrolling through the whole webpage and only affecting chat; 1fr means fills one free space
`

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
`