// constants
const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

const API_URL = 'https://rel.ink/api/links/';

const SET_LOADING = 'SET_LOADING';
const SET_DATA = 'SET_DATA';
const SET_ERROR = 'SET_ERROR';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// actions
export const setLoading = (loading) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};

export const setData = (data) => async (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const setError = (error) => async (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
};

export const shortenLink = (link) => async (dispatch) => {
  dispatch(setLoading(true));

  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ url: link }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch(setData(res)))
    .catch((exception) => setError(exception));

  dispatch(setLoading(false));
};
