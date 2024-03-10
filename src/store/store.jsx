import { legacy_createStore } from "redux";

const userData = JSON.parse(localStorage.getItem("userData")) || {
  data: [],
  currentUser: {},
};

const reducer = (state = userData, action) => {
  switch (action.type) {
    case "newUser": {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          data: [...state.data, action.payload],
          currentUser: {},
        })
      );
      return { data: [...state.data, action.payload], currentUser: {} };
    }
    case "loggedIn": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ data: state.data, currentUser: action.payload })
      );
      return { data: state.data, currentUser: action.payload };
    }
    //
    case "ADD_TO_WATCHLIST": {
      const currentUser = state.currentUser;
      const data = state.data;
      const newUserDetails = data.map(item => {
        if (
          item.username == currentUser.username &&
          item.password == currentUser.password
        ) {
          return { ...item, watchList: [...item.watchList, action.payload] };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          data: newUserDetails,
          currentUser: currentUser,
        })
      );
      return { data: newUserDetails, currentUser: currentUser };
    }
    //
    case "ADD_TO_FAVORITE": {
      const currentUser = state.currentUser;
      const data = state.data;
      const newUserDetails = data.map(item => {
        if (
          item.username == currentUser.username &&
          item.password == currentUser.password
        ) {
          return { ...item, favorite: [...item.favorite, action.payload] };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          data: newUserDetails,
          currentUser: currentUser,
        })
      );
      return { data: newUserDetails, currentUser: currentUser };
    }
    //
    case "REMOVE_FROM_LIST": {
      const currentUser = state.currentUser;
      const data = state.data;
      const newUserDetails = data.map(item => {
        if (
          item.username == currentUser.username &&
          item.password == currentUser.password
        ) {
          let newArr = item[`${action.list}`].filter(
            moviedId => moviedId !== action.payload
          );
          return { ...item, [action.list]: newArr };
        } else {
          return item;
        }
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          data: newUserDetails,
          currentUser: currentUser,
        })
      );
      return { data: newUserDetails, currentUser: currentUser };
    }
    //
    case "logout": {
      localStorage.setItem(
        "userData",
        JSON.stringify({ data: state.data, currentUser: {} })
      );
      return { data: state.data, currentUser: {} };
    }
    default: {
      return state;
    }
  }
};

export const Store = legacy_createStore(reducer);
