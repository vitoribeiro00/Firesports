import produce from 'immer';

const INITIAL_STATE = {
  statusCode: 0,
};


export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.statusCode = action.payload.statusCode ;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        break;
      }
      case '@auth/SIGN_FAILURE': {
        break;
      }
      default:
    }
  });
}
