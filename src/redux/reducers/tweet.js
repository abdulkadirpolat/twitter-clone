 import { combineReducers } from "redux";

// const INITIAL_STATE = {
//     displayName : "",
//     username : "",
//     content: "",
//     timestamp : "",
//     image : "",
//     avatar : "",
// };

const tweets = (state = [], action) => {
    switch (action.type) {
        case "ADD_TWEET":
            return [
                ...state,
                {
                    displayName : action.displayName,
                    username : action.username,
                    content: action.content,
                    timestamp : action.timestamp,
                    image : action.image,
                    avatar : action.avatar,
                }
            ];
        case "REMOVE_TWEET":
            return state.filter((tweet) => tweet.id !== action.id);
        default:
            return state;
    }
};

export const tweetsReducer = combineReducers({
    tweets,
   
});
