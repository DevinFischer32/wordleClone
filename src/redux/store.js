import { createStore } from "redux";

const initialState = {
  helpDisplay: false,
  settingDisplay: false,
  leaderBoardDisplay: false,
};

function reducer(state = initialState, action) {
  if (action.type === "changeHelpDisplay") {
    return { ...state, helpDisplay: action.payload };
  } else if (action.type === "changeSettingDisplay") {
    return { ...state, settingDisplay: action.payload };
  } else if (action.type === "changeLeaderboardDisplay") {
    return { ...state, leaderBoardDisplay: action.payload };
  }
  return state;
}

export const store = createStore(reducer);
