// constants
const INITIAL_STATE = {
  links: [],
};

const ADD_LINK = 'ADD_LINK';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_LINK: {
      const { links } = state;
      links.push(action.payload);

      return {
        ...state,
        links: [...links],
      };
    }
    default:
      return state;
  }
}

// actions
export const addLink = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_LINK,
    payload,
  });
};
