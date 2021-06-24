
import React, { useState } from "react";
import IngredientSearch from './components/IngredientSearch';
import ShoppingList from './components/ShoppingList';
import TopThree from './components/TopThree';
// import Favorites from "./components/Favorites";
import logo from './images/WhatsInTheFridgeFlat.png'
import veg from './images/Vegetables.jpg'
import './App.css';

//authentication
import { Switch, Route, useHistory } from 'react-router-dom';
import Local from './components/helper/Local';
import Api from './components/helper/Api';
import NavBar from './components/authentication/NavBar';
import ErrorPage from './components/authentication/ErrorPage';
import AuthenticationRoute from './components/authentication/AuthenticationRoute';
import UserLogin from './components/authentication/UserLogin';
import ProfileView from './components/authentication/ProfileView';
import MembersOnlyView from './components/authentication/MembersOnlyView';

function App() {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  // const [isRecipie, setIsRecipie] = useState(false) //caution - spelling! Do we need this?
  const [userId, setUserId] = useState(1)
  const [missingIngredients, setMissingIngredients] = useState([]);
  const [topSuggestions, setTopSuggestions] = useState([]);

  /* function setFeatId(id){
     let ix = topThree.findIndex(t => (t.id ===id));
     setFeatRecipe(topThree[ix]);
    }*/


  /* function setFeatId(id){
     let ix = topThree.findIndex(t => (t.id ===id));
     setFeatRecipe(topThree[ix]);
    }*/

  const [user, setUser] = useState(Local.getUser());
    const [loginErrorMsg, setLoginErrorMsg] = useState('');
    const history = useHistory();

    async function doLogin(username, password) {
      let response = await Api.loginUser(username, password);
      if (response.ok) {
          Local.saveUserInfo(response.data.token, response.data.user);
          setUser(response.data.user);
          setLoginErrorMsg('');
          history.push('/');
      } else {
          setLoginErrorMsg('Login failed');
      }
  }
    function doLogout() {
      Local.removeUserInfo();
      setUser(null);
      history.push('/');
  }
  
  return (

  <div className="App" style={{ backgroundColor: '#DDFFBC' }}>

    <NavBar user={user} onLogout={doLogout} />
                  <h1> What's in the Fridge? </h1>

    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#52734D' }}>


      
        {/* "Brand"/Logo */}
        <img className="navbar-brand" className="img-fluid" href="#" src={veg}></img>

        {/* Hamburger Icon */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="#">Shopping List</a>

            </div>
        </div>
    </nav>


    <div className="container mt-4">

      <h2 className="text-center" style={{color: '#375433'}}>
         I am hungry....
      </h2>
  

    </div> {/* .container */}

    <div className="container">
      <Switch>
    
        <IngredientSearch userId = {userId}/>


       
             {/* AUTHENTICATION */}

             <AuthenticationRoute path="/shoppingList" exact>
                <ShoppingList userId={userId}/>
             </AuthenticationRoute>
                      
             <AuthenticationRoute path="/users/:userId" exact>
                <ProfileView /> 
              </AuthenticationRoute> {/* Displays profile page after user logs in */}

              <AuthenticationRoute path="/members-only" exact>
                        <MembersOnlyView />
                    </AuthenticationRoute>

              <Route path="/login" exact>
                              <UserLogin 
                                  onSubmit={(u, p) => doLogin(u, p)} 
                                  error={loginErrorMsg} 
                              />
                          </Route>
                  <ErrorPage code="404" text="Page not found" />
                </Switch>

              </div>

    <footer className="footer text-center p-3 mt-3 bg-secondary text-light">
        <img src = {logo}></img>

        <br />
        A CodeOp Team Project by Abigail Fitzjoshua, Anastatsia Pirvu, Kat Hurdley and Holly Lyford
    </footer>

    </div>
   
  );

  
}

export default App;