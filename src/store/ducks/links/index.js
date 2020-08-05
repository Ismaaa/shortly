// constants
const INITIAL_STATE = {
  links: {},
  loading: false,
  error: null,
};

const SEND_REQUEST = 'SEND_REQUEST';
const SET_SUCCESS = 'SET_SUCCESS';
const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state };
    case SET_SUCCESS:
      return { ...state };
    case SET_ERROR:
      return { ...state };
    case SET_LOADING:
      return { ...state };
    default:
      return state;
  }
}

// actions
