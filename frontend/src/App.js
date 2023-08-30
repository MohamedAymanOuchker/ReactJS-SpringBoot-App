import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={"/"} className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AymWebsite
              </span>
            </Link>

            <div className="w-auto">
              <ul className="font-medium flex space-x-4">
                <li className="block py-2 md:p-0">
                  <Link
                    to={"/home"}
                    className="text-gray-900 dark:text-white hover:text-blue-700"
                  >
                    Home
                  </Link>
                </li>
                {showModeratorBoard && (
                  <li className="block py-2 md:p-0">
                    <Link
                      to={"/mod"}
                      className="text-gray-900 dark:text-white hover:text-blue-700"
                    >
                      Moderator Board
                    </Link>
                  </li>
                )}
                {showAdminBoard && (
                  <li className="block py-2 md:p-0">
                    <Link
                      to={"/admin"}
                      className="text-gray-900 dark:text-white hover:text-blue-700"
                    >
                      Admin Board
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="block py-2 md:p-0">
                    <Link
                      to={"/user"}
                      className="text-gray-900 dark:text-white hover:text-blue-700"
                    >
                      User
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="md:hidden w-auto">
              <button
                className="text-gray-900 dark:text-white"
                onClick={this.toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${
                this.state.isMenuOpen ? "block" : "hidden"
              } md:block md:w-auto md:ml-4`}
            >
              <div>
                {currentUser ? (
                  <ul className="flex space-x-4">
                    <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <Link to={"/profile"}>
                        * Profile: {currentUser.username} *
                      </Link>
                    </li>
                    <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <a href="/login" onClick={this.logOut}>
                        Log Out
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="flex space-x-4">
                    <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <Link to={"/login"}>Log in</Link>
                    </li>
                    <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <Link to={"/register"}>Sign Up</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>

        <AuthVerify logOut={this.logOut} />

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href className="hover:underline">
                AymWebsite
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href className="mr-4 hover:underline md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
