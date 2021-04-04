import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,

} from '../Types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
        text: '',
      };
    }

    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }

    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
        loading: false,
      };
    }

    case SET_ALERT: {
      return {
        ...state,
        alert: action.payload,
      };
    }

    case REMOVE_ALERT: {
      return {
        ...state,
        alert: null
      };
    }

    default:
      return state;
  }
};

export default GithubReducer;
