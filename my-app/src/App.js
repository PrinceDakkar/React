import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Component } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store'
import { compose } from "redux";
import { Suspense } from "react";
const DialogsContainer = React.lazy(()=>import("./components/Dialogs/DialogsContainer")) ;
const ProfileContainer =  React.lazy(()=>import("./components/Profile/ProfileContainer"))


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<div>Loading...</div>}>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer =connect(mapStateToProps, { initializeApp })(App);

let SamuraiJSApp = (props) => {
 return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>;
};

export default SamuraiJSApp
